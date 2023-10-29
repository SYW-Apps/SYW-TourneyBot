import { createContext, useContext, useState } from "react";
import createApi, { Api } from "./api";

const ApiContext = createContext<Api | undefined>(undefined);

export function ApiProvider({ children }: { children: any }) {
    
    const [api, setApi] = useState<Api | undefined>();

    if (!api) {
        setApi(createApi());
    }

    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    );
};

export function useAPI(): Api {
    return useContext(ApiContext) as Api
};