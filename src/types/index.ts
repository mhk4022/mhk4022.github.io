export interface ProfileDataType {
  username: string;
  role: string;
  affiliation: string;
  location: string;
}

export interface ExperienceItemType {
  type: "Work" | "Education";
  startDate: Date;
  endDate?: Date | null;
  organization: string;
  title: string;
}

export interface SkillsDataType {
  title: string;
}

export interface SnsDataType {
  github: string;
  twitter: string;
}
