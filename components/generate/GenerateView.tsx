import { useState } from "react";
import { GenerateConfig } from "../../interfaces/GenerateConfig";
import StepThree from "./StepThree";
import InitStep from "./InitStep";
import SectionView from "./SectionView";
import StepFour from "./StepFour";
import { diffList, sectionList } from "../../lib/generate";
import StepFive from "./StepFive";

interface GenerateViewProps {
  topicList: Array<{ subtopic: string; section: string }>;
}

export default function GenerateView({ topicList }: GenerateViewProps) {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [generateConfig, setGenerateConfig] = useState<GenerateConfig>({
    sections: [],
    diffDist: diffList.reduce(
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

  const nextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const prevPage = () => {
    setPageNumber((prev) => prev - 1);
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
              topicDist: topicList
                .filter((obj) => obj.section === section)
                .map(({ subtopic }) => ({
                  value: subtopic,
                  count: 0,
                })),
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
        difficulties={generateConfig.diffDist}
        onNextHandler={nextPage}
        onPrevHandler={prevPage}
        updateDistItem={(key, value) => {
          const newDiffDist = {
            ...generateConfig.diffDist,
            [key]: value,
          };
          setGenerateConfig({
            ...generateConfig,
            diffDist: newDiffDist,
          });
        }}
        getTotalQuestion={() => {
          let totalQuestions = 0;
          for (let section of generateConfig.sections) {
            if (section.style === "specific") {
              for (let { count } of section.topicDist) {
                totalQuestions += count;
              }
            } else if (section.style === "total") {
              totalQuestions += section.totalQuestion;
            } else {
              totalQuestions += 57;
            }
          }
          return totalQuestions;
        }}
      />
    );
  }

  if (pageNumber - generateConfig.sections.length === 2) {
    return (
      <StepFour
        generateConfig={generateConfig}
        onSubmitHandler={() => {
          // TODO: Attempt to send generateConfig to backend
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
          // TODO: Either generate PDF of the exam or redirect to exam page
          console.log(generateConfig);
        }}
        onPrevHandler={prevPage}
      />
    );
  }

  return <div></div>;
}
