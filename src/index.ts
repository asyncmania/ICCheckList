import { HttpClient } from "./httpClient";
import { IssueCheckList } from "./issuesCheckList";
import { Jira } from "./Jira";
import { ConsoleOutputFormatter } from './consoleOutputFormatter'

(async function main(): Promise<void> {

  const http = new HttpClient();

  const jiraIssues = new Jira(http);

  const jiraIssuesList  = new IssueCheckList(jiraIssues);

  try {
     await jiraIssuesList.fetchIssues();
  } catch (error) {
    console.error(error.message);
  }
  
  const consoleFormatter = new ConsoleOutputFormatter()

  jiraIssuesList.output(consoleFormatter)

})();
