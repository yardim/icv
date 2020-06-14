export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface SkillsResponse {
  [id: string]: string[];
}

export interface ExpItem {
  id?: string;
  position: string;
  startDate: string;
  endDate: string;
  company: string;
  generalTechnologies?: string[];
  generalResponsibilities?: string[];
  projects?: Project[];
  period?: string;
  isExpanded?: boolean;
}

export interface Project {
  projectName: string;
  projectTechnologies?: string[];
  projectResponsibilities?: string[];
}
