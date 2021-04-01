import { IComponentWithIssueCount } from "./interfaces/IComponent";
import { IOutput } from "./interfaces/IOutput";

export class ConsoleOutputFormatter implements IOutput {
  format(data: IComponentWithIssueCount[]): void {
    console.table(
      data.map(({id, name, description, issuesCount }) => ({
        id,
        component: name,
        description,
        issuesCount,
      }))
    );
  }
}
