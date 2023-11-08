import { createContext, useContext, useState } from "react";

import 'react-toastify/dist/ReactToastify.css';

type PageValueContextValueValue = { [key: string]: any };
type PageValueContextValue = {
    setInitialValues: (initialValues: { [key: string]: any }) => void,
    updateValues: (updatedValues: { [key: string]: any }) => void,
    values: PageValueContextValueValue
};
type CustomPageValueContextValue<T> = Omit<PageValueContextValue, 'values'> & {
    values: T
};

const PageValueContext = createContext<PageValueContextValue | {}>({});

export function PageValueProvider({ children }: { children: any }) {
    function setInitialValues(initialValues: { [key: string]: any }) {
        setPageValueContext(ctx => { return { ...ctx, values: initialValues }; });
    }

    function updateValues(updatedValues: { [key: string]: any }) {
        setPageValueContext(ctx => { return { ...ctx, values: { ...ctx.values, ...updatedValues } }; });
    }

    const [pageValueContext, setPageValueContext] = useState<PageValueContextValue>({ setInitialValues, updateValues, values: {} });

    return (
        <PageValueContext.Provider value={pageValueContext}>
            {children}
        </PageValueContext.Provider>
    );
};

export function usePageValues<T>(): CustomPageValueContextValue<T> {
    return useContext(PageValueContext) as CustomPageValueContextValue<T>;
};