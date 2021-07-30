export interface HttpRequestOptions {
    method: string;
    endpoint: string;
    headers: {[key: string]: string;};
    requestBody?: string;
    responseType: XMLHttpRequestResponseType;
}

export interface LoginFormOptions{
    userUrl: string;
    success: () => void;
    error: () => void;
}

export interface LoginApiResponse{
    statusCode: number;
    message: string;
}