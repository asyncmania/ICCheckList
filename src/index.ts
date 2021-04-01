import { HttpClient } from "./lib/httpClient";
import { IssueCheckList } from "./issuesCheckList";
import { Jira } from "./jira";
import { ConsoleOutputFormatter } from './consoleOutputFormatter'

(async function main(): Promise<void> {

  const http = new HttpClient();

  const jiraInstance = new Jira(http);

  const jiraIssues  = new IssueCheckList(jiraInstance);

  try {
     await jiraIssues.fetchIssues();
  } catch (error) {
    console.error(error.message);
  }
  
  const consoleFormatter = new ConsoleOutputFormatter()

  jiraIssues.output(consoleFormatter)

})();
