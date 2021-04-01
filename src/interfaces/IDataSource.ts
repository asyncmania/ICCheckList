import { IComponent, IComponentWithIssueCount } from './IComponent';

//IComponentWithIssueCount[]

export interface IDataSource {
  
  getData(): Promise<IComponentWithIssueCount[]>

}