export interface GenerateConfig {
  sections: SectionConfig[];
}

interface DistItem {
  value: string;
  count: number;
}

export interface SectionConfig {
  section: string;
  style: string;
  totalQuestion: number;
  topicDist: DistItem[];
  diffDist: DistItem[];
}
