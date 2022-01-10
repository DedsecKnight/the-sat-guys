import { useState } from "react";
import { GenerateConfig } from "../../interfaces/GenerateConfig";
import InitStep from "./InitStep";
import SectionView from "./SectionView";

export default function GenerateView() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [generateConfig, setGenerateConfig] = useState<GenerateConfig>({
    sections: [],
  });

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
            sections: value.map((section) => ({
              section,
              style: "",
              totalQuestion: 0,
              topicDist: [],
              diffDist: [],
            })),
          });
        }}
        onNextHandler={nextPage}
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
            sections: newConfig,
          });
        }}
        onFinishHandler={nextPage}
        onBackHandler={prevPage}
      />
    );
  }

  return <div></div>;
}
