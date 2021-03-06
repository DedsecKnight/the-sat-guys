import { useState } from "react";
import { GenerateConfig } from "../../interfaces/GenerateConfig";
import StepThree from "./StepThree";
import InitStep from "./InitStep";
import SectionView from "./SectionView";
import StepFour from "./StepFour";
import { diffList, sectionList } from "../../lib/generate";
import StepFive from "./StepFive";
import { useSession } from "next-auth/react";
import { RequestHelper } from "../../lib/request-helper";
import { useNotificationContext } from "../context-api/NotificationContext";
import { useRouter } from "next/router";

interface GenerateViewProps {
  topicList: Array<{ subtopic: string; section: string }>;
}

export default function GenerateView({ topicList }: GenerateViewProps) {
  const router = useRouter();
  const { updateNotificationlist } = useNotificationContext();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const { data: session } = useSession();
  const [generateConfig, setGenerateConfig] = useState<GenerateConfig>({
    user_id: session!.user!.id!,
    sections: [],
    diffDict: diffList.reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: 0,
      }),
      {} as Record<string, number>
    ),
  });
  const [sectionPageNumber, setSectionPageNumber] = useState<number[]>([]);
  const [checkedSection, setCheckedSection] = useState(
    sectionList.map(({ value }) => ({
      section: value,
      checked: false,
    }))
  );
  const [examId, setExamId] = useState<string>("");

  const nextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const prevPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  const generateTopicDist = (
    section: string,
    style: string
  ): Record<string, number> => {
    return topicList
      .filter((obj) => obj.section === section)
      .reduce(
        (acc, curr) => ({
          ...acc,
          [curr.subtopic]: style === "specific" ? 0 : 9999,
        }),
        {} as Record<string, number>
      );
  };

  if (pageNumber === 0) {
    return (
      <InitStep
        updateSectionList={(value) => {
          setGenerateConfig({
            ...generateConfig,
            sections: value.map((section) => ({
              section,
              style: "",
              totalQuestion: 0,
              topicDist: {},
            })),
          });
          setSectionPageNumber(value.map(() => 0));
        }}
        onNextHandler={nextPage}
        checkedSection={checkedSection}
        updateCheckedSection={(value) => {
          setCheckedSection(value);
        }}
      />
    );
  }

  if (pageNumber <= generateConfig.sections.length) {
    return (
      <SectionView
        sectionConfig={generateConfig.sections[pageNumber - 1]}
        updateSectionConfig={(value) => {
          const newConfig = generateConfig.sections.map((obj) => ({ ...obj }));
          newConfig[pageNumber - 1] = value;
          setGenerateConfig({
            ...generateConfig,
            sections: newConfig,
          });
        }}
        initializeTopicDist={(style: string) => {
          setGenerateConfig({
            ...generateConfig,
            sections: generateConfig.sections.map((section, idx) => {
              if (idx != pageNumber - 1) return section;
              return {
                ...section,
                topicDist: generateTopicDist(section.section, style),
              };
            }),
          });
        }}
        onFinishHandler={nextPage}
        onBackHandler={prevPage}
        currentPage={sectionPageNumber[pageNumber - 1]}
        updateCurrentPage={(value) => {
          const newData = [...sectionPageNumber];
          newData[pageNumber - 1] = value;
          setSectionPageNumber(newData);
        }}
      />
    );
  }

  if (pageNumber - generateConfig.sections.length === 1) {
    return (
      <StepThree
        difficulties={generateConfig.diffDict}
        onNextHandler={nextPage}
        onPrevHandler={prevPage}
        updateDistItem={(key, value) => {
          const newDiffDist = {
            ...generateConfig.diffDict,
            [key]: value,
          };
          setGenerateConfig({
            ...generateConfig,
            diffDict: newDiffDist,
          });
        }}
        getTotalQuestion={() => {
          return generateConfig.sections.reduce((acc, section) => {
            if (section.style === "specific") {
              return (
                acc +
                Object.values(section.topicDist).reduce(
                  (acc, curr) => acc + curr,
                  0
                )
              );
            }
            if (section.style === "total") {
              return acc + section.totalQuestion;
            }
            return acc + 57;
          }, 0);
        }}
      />
    );
  }

  if (pageNumber - generateConfig.sections.length === 2) {
    return (
      <StepFour
        generateConfig={generateConfig}
        onSubmitHandler={async () => {
          // TODO: Attempt to send generateConfig to backend
          generateConfig.sections = generateConfig.sections.map((section) => {
            if (section.style === "normal") {
              return {
                ...section,
                totalQuestion: 57,
              };
            }
            if (section.style === "specific") {
              return {
                ...section,
                totalQuestion: Object.values(section.topicDist).reduce(
                  (acc, curr) => acc + curr,
                  0
                ),
              };
            }
            return section;
          });
          const { status, data } = await RequestHelper.post<any, any>(
            "/api/generate",
            { "Content-Type": "application/json" },
            {
              action: "generate",
              generateConfig,
            }
          );
          if (!status) {
            updateNotificationlist([
              {
                type: "error",
                msg: data,
              },
            ]);
            return;
          }
          setExamId(data.exam_id);
          nextPage();
        }}
        onPrevHandler={prevPage}
      />
    );
  }

  if (pageNumber - generateConfig.sections.length === 3) {
    return (
      <StepFive
        onNextHandler={() => {
          router.push(`/exam?id=${examId}`);
        }}
        onPrevHandler={prevPage}
      />
    );
  }

  return <div></div>;
}
