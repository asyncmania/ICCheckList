import { IComponent, IComponentWithIssueCount } from "./interfaces/IComponent";
import { IDataSource } from "./interfaces/IDataSource";
import { IOutput } from "./interfaces/IOutput";

export class IssueCheckList {

  private issuesList: IComponentWithIssueCount[] = [];

  constructor(public dataSource: IDataSource) {}

  async fetchIssues(): Promise<void> {
    this.issuesList = await this.dataSource.getData();
  }

  output(formatter: IOutput): void {
     formatter.format(this.issuesList)
  }

}
