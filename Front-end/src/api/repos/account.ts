import axios, { AxiosResponse, AxiosError } from "axios";
import moment from "moment-timezone";

import Account from "../../models/Accounts/Account";

import { get, post } from "./api-utils";
import { ErrorObj, HandleError } from "./utils";

export interface AccountRepo {
    getSelf(): Promise<Account | ErrorObj>,
}

export default {
    async getSelf(): Promise<Account | ErrorObj> {
        try
        {
            const res = await get(`/api/account`);

            const data = res.data.value as Account;

            return data || HandleError(res);
        }
        catch (e)
        {
            return HandleError(e);
        }
    },
}