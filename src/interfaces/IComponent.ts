export interface IComponent {
  self: string;
  id: string;
  name: string;
  description: string;
  assigneeType: string;
  realAssigneeType: string;
  isAssigneeTypeValid: boolean;
  project: string;
  projectId: number;
}

export interface IComponentIssues {
  expand: string;
  startAt: number;
  maxResults: number;
  total: number;
  issues: any[];
}

export interface IComponentWithIssueCount extends IComponent {
  issuesCount: number;
}
