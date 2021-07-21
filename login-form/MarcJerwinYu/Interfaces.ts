export interface HttpClientOptions {
    method : string;
    endpoint : string;
    headers : {[key : string]: string};
    requestBody? : string;
    responseType : XMLHttpRequestResponseType;
}

export interface RegFormOptions {
    url : string;
    success: () => void;
    error: () => void;
}

export interface LoginApiResponse {
    statusCode : number;
    message : string;
}