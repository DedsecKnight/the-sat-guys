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
  topicList: string[];
}

export default function SectionView({
  sectionConfig,
  updateSectionConfig,
  onBackHandler,
  onFinishHandler,
  currentPage,
  updateCurrentPage,
  topicList,
}: SectionConfigProps) {
  if (currentPage === 0)
    return (
      <StepOne
        sectionConfig={sectionConfig}
        updateSectionConfig={updateSectionConfig}
        onNextHandler={() => {
          if (sectionConfig.style !== "normal")
            updateCurrentPage(currentPage + 1);
          else onFinishHandler();
        }}
        onPrevHandler={() => {
          onBackHandler();
        }}
      />
    );

  if (currentPage === 1) {
    if (sectionConfig.style === "specific")
      return (
        <StepTwoDistTopic
          sectionName={sectionConfig.section}
          topicList={topicList}
          onNextHandler={() => {
            onFinishHandler();
          }}
          onPrevHandler={() => {
            updateCurrentPage(currentPage - 1);
          }}
        />
      );

    if (sectionConfig.style === "total") {
      return (
        <StepTwoTotal
          onNextHandler={() => {
            onFinishHandler();
          }}
          onPrevHandler={() => {
            updateCurrentPage(currentPage - 1);
          }}
        />
      );
    }
    return <div></div>;
  }

  return <div></div>;
}
