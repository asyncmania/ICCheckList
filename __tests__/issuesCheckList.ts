import { ConsoleOutputFormatter } from '../src/consoleOutputFormatter';
import { IComponentWithIssueCount } from '../src/interfaces/IComponent';
import { IDataSource } from '../src/interfaces/IDataSource';
import { IssueCheckList } from '../src/issuesCheckList';



const jiraIssuesList: IComponentWithIssueCount[] = [
  {
    self: "https://herocoders.atlassian.net/rest/api/3/component/10105",
    id: "10105",
    name: "Data analysis",
    description: "Insights into customer usage, tracking, analytics, metabase, etc.",
    assigneeType: "PROJECT_DEFAULT",
    realAssigneeType: "PROJECT_DEFAULT",
    isAssigneeTypeValid: false,
    project: "IC",
    projectId: 10400,
    issuesCount: 5
  },
  {
    self: "https://herocoders.atlassian.net/rest/api/3/component/10104",
    id: "10104",
    name: "Infrastructure",
    description: "Heroku, Google Cloud, Sentry, and other tooling related stuff",
    assigneeType: "PROJECT_DEFAULT",
    realAssigneeType: "PROJECT_DEFAULT",
    isAssigneeTypeValid: false,
    project: "IC",
    projectId: 10400,
    issuesCount: 4
  },
]


class MockDataSource implements IDataSource {
  
  private issueList = jiraIssuesList

  async getData(): Promise<IComponentWithIssueCount[]> {
    return this.issueList
  }

}


describe('IssuesCheckList Class', () => {

  let mockedIssueList

  beforeAll(() => {
    mockedIssueList = new IssueCheckList(new MockDataSource())
  });


  test('Should return a an array of object that contains issuesCount', async () => {

      await mockedIssueList.fetchIssues()
     
     expect(mockedIssueList.issuesList).toEqual(jiraIssuesList)

     expect(mockedIssueList.issuesList.length).toBe(2)
  })

  test('Ouput format method should be called', () => {

    const consoleOutputFormatter = new ConsoleOutputFormatter()

    const spy = jest.spyOn(consoleOutputFormatter, 'format').mockImplementation(jest.fn())

    mockedIssueList.output(consoleOutputFormatter)

    expect(consoleOutputFormatter.format).toHaveBeenCalled();

    spy.mockRestore();

  })

})