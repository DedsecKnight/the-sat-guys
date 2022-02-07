export interface GenerateConfig {
  user_id: string;
  sections: SectionConfig[];
  diffDist: Record<string, number>;
}

export interface SectionConfig {
  section: string;
  style: string;
  totalQuestion: number;
  topicDist: Record<string, number>;
}
