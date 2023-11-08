import axios, { AxiosResponse, AxiosError } from "axios";
import moment from "moment-timezone";

import { get, post } from "./api-utils";
import { ErrorObj, HandleError } from "./utils";

export interface AuthorizationRepo {
    validateAuthorization(token: string): Promise<boolean | ErrorObj>,
    renewSession(token: string, secret: string, allowedEndpoints?: string[]): Promise<{ success: boolean, sessionToken: string, sessionSecret: string, expiresIn: number, message?: string } | ErrorObj>,
    logout(): Promise<{ success: boolean, message?: string } | ErrorObj>,
}

export default {
    async validateAuthorization(token: string): Promise<boolean | ErrorObj> {
        try
        {
            const data = { sessionToken: token };

            const res = await post(`/api/authorize/validate`, data);

            const result = res.data;

            return result.isValid;
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async renewSession(token: string, secret: string, allowedEndpoints: string[] = []): Promise<{ success: boolean, sessionToken: string, sessionSecret: string, expiresIn: number, message?: string } | ErrorObj> {
        try
        {
            const data = { sessionToken: token, sessionSecret: secret, allowedEndpoints };

            const res = await post(`/api/authorize/refresh`, data);

            const result = res.data as { success: boolean, sessionToken: string, sessionSecret: string, expiresIn: number, message?: string };

            return result;
        }
        catch (e)
        {
            return HandleError(e);
        }
    },

    async logout(): Promise<{ success: boolean, message?: string } | ErrorObj> {
        try
        {
            const data = {  };

            const res = await post(`/api/authorize/logout`, data);

            const result = res.data as { success: boolean, message?: string };

            return result;
        }
        catch (e)
        {
            return HandleError(e);
        }
    },
}