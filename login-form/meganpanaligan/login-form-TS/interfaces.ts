export interface HttpRequestOptions {
    method: string;
    endpoint: string;
    headers: { [key: string]: string; };
    requestBody?: string; // optional
    responseType: XMLHttpRequestResponseType;
}

export interface LoginFormOptions {
    url: string;
    success: () => void;
    error: () => void;
    
}
export interface LoginApiResponse {
    statusCode: number;
    message: string;
}