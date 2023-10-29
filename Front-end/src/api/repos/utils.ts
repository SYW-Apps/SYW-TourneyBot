import { AxiosResponse, AxiosError } from "axios";

import { authStorageName } from "../../authorization/account";

export function getHeaders() {
    const headers: { [key: string]: string } = {
        "Content-Type": "application/json",
    };

    const auth = localStorage.getItem(authStorageName) as string;
    if (auth) {
        headers['SYWAccounts_SessionToken'] = auth.split('::')[0];
    }

    return headers;
}

export type ErrorObj = { message: string, error: any };

export function isError(value: ErrorObj | any): value is ErrorObj {
    return (value as ErrorObj).error !== undefined;
}

export function isAxiosResponse(error: AxiosResponse<any> | any): error is AxiosResponse<any> {
    return (error as AxiosResponse<any>).status !== undefined;
}

export function isAxiosError(error: AxiosError<any, any> | any): error is AxiosError<any, any> {
    return (error as AxiosError).request !== undefined;
}

export function HandleError(error: AxiosResponse<any> | AxiosError<any, any> | any): ErrorObj {
    if (isAxiosResponse(error)) {
        return { message: error.data.detail || error.statusText, error }
    }
    else if (isAxiosError(error)) {
        if (error.response) {
            if (error.response.status == 401 || error.response.status == 403) {
                console.log('User is not logged in! redirecting to login page.');
                window.location.href = '/login';

                return { message: 'Not logged in!', error };
            }
            
            if (error.response.data instanceof String || typeof error.response.data == 'string') {
                console.log(`Server responded: ${error.response.data}`, error.response, error);
            }
            else {
                console.log(`Server responded: ${error.response.status} - ` + (error.response.data.message || error.response.data.detail), error.response, error);
            }

            return { message: typeof error.response?.data == 'string' ? error.response?.data as string : error.response?.data.message || error.response?.data.detail || error.response?.statusText || "Unknown Error", error };
        } else if (error.request) {
            console.log(`Request failed: `, error.request, error);
        } else {
            console.log(`Axios request execution fail: ${error.message}`, error);
        }

        return { message: error.message as string || "Unknown Error", error };
    }
    else {
        return { message: error.message || 'Unknown', error };
    }
};