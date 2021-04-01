import { IComponent, IComponentWithIssueCount } from './IComponent';

export interface IOutput {
  format(data: IComponentWithIssueCount[]): void
}