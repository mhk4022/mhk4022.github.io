import {
  ProfileDataType,
  ExperienceItemType,
  SkillsDataType,
  SnsDataType,
} from "@/types";

export const profileData: ProfileDataType = {
  username: "mhk4022",
  role: "Backend Engineer",
  affiliation: "CyberAgent Inc. / Freelance",
  location: "Tokyo, Japan",
};

export const experienceData: ExperienceItemType[] = [
  {
    type: "Work",
    startDate: new Date(2025, 1),
    endDate: new Date(2025, 2),
    organization: "CyberAgent Inc. - Retail Booster",
    title: "Part-time",
  },
  {
    type: "Work",
    startDate: new Date(2024, 10),
    endDate: new Date(2024, 11),
    organization: "CyberAgent Inc. - Prism Partner",
    title: "Part-time",
  },
  {
    type: "Work",
    startDate: new Date(2024, 8),
    endDate: new Date(2024, 9),
    organization: "CyberAgent Inc. - Tapple",
    title: "Part-time",
  },
  {
    type: "Work",
    startDate: new Date(2024, 4),
    endDate: new Date(2024, 7),
    organization: "CyberAgent Inc. - アプリ運用カンパニー",
    title: "Part-time",
  },
  {
    type: "Work",
    startDate: new Date(2023, 12),
    endDate: new Date(2024, 2),
    organization: "CyberAgent Inc. - CL",
    title: "Part-time",
  },
  {
    type: "Work",
    startDate: new Date(2023, 10),
    endDate: new Date(2023, 11),
    organization: "CyberAgent Inc. - Dynalyst",
    title: "Part-time",
  },
  {
    type: "Work",
    startDate: new Date(2023, 3),
    endDate: new Date(2023, 3),
    organization: "CyberAgent Inc. - WINTICKET",
    title: "Intern",
  },
  {
    type: "Education",
    startDate: new Date(2021, 4),
    endDate: new Date(2025, 3),
    organization:
      "立命館大学 情報理工学部",
    title: "Bachelor",
  },
];

export const skillsData: SkillsDataType = {
  title: "TOEIC 800",
};

export const snsData: SnsDataType = {
  github: "https://github.com/mhk4022",
  twitter: "https://x.com/mhk40222",
};
