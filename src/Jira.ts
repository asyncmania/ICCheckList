import {
  IComponent,
  IComponentIssues,
  IComponentWithIssueCount,
} from "./interfaces/IComponent";
import { IDataSource } from "./interfaces/IDataSource";
import { IHttpClient } from "./interfaces/IHttpClient";


enum filters {
  COMPONENT_LEAD = "COMPONENT_LEAD"
}


export class Jira implements IDataSource {
  private readonly baseUrl: string =
    "https://herocoders.atlassian.net/rest/api/3";

  constructor(public http: IHttpClient) {}

  async getData(): Promise<IComponentWithIssueCount[]> {
    
    const components = await this.getComponentData();

    const componentIssues = await Promise.all(
      components
        .filter((component) => component.assigneeType !== filters.COMPONENT_LEAD )
        .map((component) => this.getComponentIssuesData(component))
    );

    return componentIssues.map((component, i) => ({
      ...components[i],
      issuesCount: component.issues.length,
    }));
  }

  getComponentData(): Promise<IComponent[]> {
    const url = `${this.baseUrl}/project/IC/components`;
    return this.http.get<IComponent[]>({ url });
  }

  getComponentIssuesData(component: IComponent): Promise<IComponentIssues> {
    const url = `${this.baseUrl}/search?jql=component=${component.id}`;
    return this.http.get<IComponentIssues>({ url });
  }
}
