export interface HttpRequestOptions {
  method: string;
  endpoint: string;
  headers: { [key: string]: string; }; // { 'hello': 'world' }
  requestBody?: string; // optional property
  responseType: XMLHttpRequestResponseType; 
}

export interface LoginFormOptions {
  url: string;
  success: () => void;
  error: () => void;
  twitter: () => void;
  facebook: () => void;
}

export interface LoginApiResponse {
  statusCode: number;
  message: string;
}


