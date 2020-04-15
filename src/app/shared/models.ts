export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface SkillsResponse {
  [id: string]: string[];
}

export interface ExpItem {
  position: string;
  dateRange: string[];
  period?: string;
  company: string;
  technologies: string[];
  responsibilities: string[];
  project: Project[];
}

export interface Project {
  name: string;
  technologies: string[];
  responsibilities: string[];
}
