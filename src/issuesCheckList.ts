import { IComponent } from "./interfaces/IComponent";
import { IDataSource } from "./interfaces/IDataSource";
import { IOutput } from "./interfaces/IOutput";

export class IssueCheckList {

  private issuesList: IComponent[] = [];

  //, public result: IOutput
  constructor(public source: IDataSource) {}

  async fetchIssues(): Promise<void> {
    this.issuesList = await this.source.getData();
  }



  output(): void {
  // this.result.format(this.issueList);
  }

}
