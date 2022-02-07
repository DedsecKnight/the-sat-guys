import { SectionConfig } from "../../interfaces/GenerateConfig";
import StepOne from "./StepOne";
import StepTwoDistTopic from "./StepTwoDistTopic";
import StepTwoTotal from "./StepTwoTotal";

interface SectionConfigProps {
  sectionConfig: SectionConfig;
  updateSectionConfig: (value: SectionConfig) => void;
  onFinishHandler: () => void;
  onBackHandler: () => void;
  currentPage: number;
  updateCurrentPage: (value: number) => void;
  initializeTopicDist: (style: string) => void;
}

export default function SectionView({
  sectionConfig,
  updateSectionConfig,
  onBackHandler,
  onFinishHandler,
  currentPage,
  updateCurrentPage,
  initializeTopicDist,
}: SectionConfigProps) {
  const nextPage = () => {
    updateCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    updateCurrentPage(currentPage - 1);
  };

  if (currentPage === 0)
    return (
      <StepOne
        sectionConfig={sectionConfig}
        updateSectionConfig={updateSectionConfig}
        onNextHandler={() => {
          initializeTopicDist(sectionConfig.style);
          if (sectionConfig.style !== "normal") nextPage();
          else onFinishHandler();
        }}
        onPrevHandler={onBackHandler}
      />
    );

  if (currentPage === 1) {
    if (sectionConfig.style === "specific")
      return (
        <StepTwoDistTopic
          sectionName={sectionConfig.section}
          topicList={sectionConfig.topicDist}
          onNextHandler={onFinishHandler}
          onPrevHandler={prevPage}
          updateTopicList={(value) => {
            updateSectionConfig({
              ...sectionConfig,
              topicDist: value,
            });
          }}
        />
      );

    if (sectionConfig.style === "total") {
      return (
        <StepTwoTotal
          totalQuestion={sectionConfig.totalQuestion}
          updateTotalQuestion={(value) => {
            updateSectionConfig({
              ...sectionConfig,
              totalQuestion: value,
            });
          }}
          onNextHandler={onFinishHandler}
          onPrevHandler={prevPage}
        />
      );
    }
    return <div></div>;
  }

  return <div></div>;
}
