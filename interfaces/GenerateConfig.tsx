export interface GenerateConfig {
  sections: SectionConfig[];
  diffDist: Record<string, number>;
}

export interface SectionConfig {
  section: string;
  style: string;
  totalQuestion: number;
  topicDist: Record<string, number>;
}
