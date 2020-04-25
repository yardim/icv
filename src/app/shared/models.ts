export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface SkillsResponse {
  [id: string]: string[];
}

export interface ExpItem {
  id: string;
  position: string;
  startDate: Date | string;
  endDate: Date | string;
  company: string;
  technologies?: string[];
  responsibilities?: string[];
  projects?: Project[];
  period?: string;
}

export interface Project {
  name: string;
  technologies: string[];
  responsibilities: string[];
}
