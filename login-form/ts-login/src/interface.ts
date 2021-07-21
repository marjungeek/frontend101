export interface HttpRequests {
    method:string;
    endpoint:string;
    headers: { [key: string]: string; }; // { 'hello': 'world' }
    requestBody?: string; // optional property
    responseType: XMLHttpRequestResponseType; 

}

export interface LoginOpt {
    url: string;
  }