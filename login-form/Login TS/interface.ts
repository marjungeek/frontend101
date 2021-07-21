export interface HttpRequestOptions {
    method: string;
    endpoint: string;
    headers: { [key: string]: string; }; // { 'hello': 'world' }
    requestBody?: string; // optional property
    responseType: XMLHttpRequestResponseType; 
  }
  
  export interface LoginClassOptions {
    url: string;
    success: () => void;
    error: () => void;
  }
  
  export interface LoginApiResponse {
    statusCode: number;
    message: string;
  }
  
  
  