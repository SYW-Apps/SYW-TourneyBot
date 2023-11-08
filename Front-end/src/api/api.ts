import baseRepo, { BaseRepo } from "./repos/base";

import authorizationRepo, { AuthorizationRepo } from "./repos/authorization";
import accountRepo, { AccountRepo } from "./repos/account";
import accountInfoRepo, { AccountInfoRepo } from "./repos/accountInfo";

export type Api = BaseRepo & AuthorizationRepo & AccountRepo & AccountInfoRepo;

export default function createApi(): Api {
    return {
        ...baseRepo,
        ...authorizationRepo,
        ...accountInfoRepo,
        ...accountRepo,
    };
};

export { isError } from "./repos/utils";