export interface IHttpClientRequestParameters {
  url: string
}


export interface IHttpClient {
  get<T>(parameters: IHttpClientRequestParameters): Promise<T>
}