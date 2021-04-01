import axios from 'axios'

import { IHttpClient, IHttpClientRequestParameters } from '../interfaces/IHttpClient';


export class HttpClient implements IHttpClient {

  get<T>(parameters: IHttpClientRequestParameters): Promise<T> {

    return new Promise<T>((resolve, reject) => {

      const { url } = parameters 
  
      axios
        .get(url)
        .then((response: any) => {
          resolve(response.data as T)
        })
        .catch((response: any) => {
          reject(response)
        })
  
    })
  }

}