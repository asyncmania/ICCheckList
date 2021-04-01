import { IComponent, IComponentWithIssueCount } from './IComponent';


export interface IDataSource {
  
  getData(): Promise<IComponentWithIssueCount[]>

}