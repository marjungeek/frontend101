export interface httpReqProperties {
    method: string;
    endpoint: string;
    headers: {[key: string]: string};
    requestBody: string;
    responseType: XMLHttpRequestResponseType;
}

export interface loginProperties {
    loginURL: string;
    success: () => void;
    error: () => void;
}

export interface loginResponse {
    statusCode: number;
}