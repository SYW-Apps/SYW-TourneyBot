import axios, { AxiosResponse, AxiosError } from "axios";
import moment from "moment-timezone";

import { ErrorObj, HandleError } from "./utils";
import { get, post } from "./api-utils";

export interface BaseRepo {
    g(): Promise<string | ErrorObj>,
    p(): Promise<{ success: boolean, message: string } | ErrorObj>,
}

export default {
    async g(): Promise<string | ErrorObj>
    {
        try
        {
            const res = await get('');

            const data = res.data;

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },
    
    async p(): Promise<{ success: boolean, message: string } | ErrorObj>
    {
        try
        {
            const data = { };

            const res = await post('/', data);
            
            const result = res.data as { success: boolean, message: string };

            return result || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },
}