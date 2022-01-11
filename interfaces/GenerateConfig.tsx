export interface GenerateConfig {
  sections: SectionConfig[];
  diffDist: DistItem[];
}

export interface DistItem {
  value: string;
  count: number;
}

export interface SectionConfig {
  section: string;
  style: string;
  totalQuestion: number;
  topicDist: DistItem[];
}
