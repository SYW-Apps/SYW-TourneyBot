import { createContext, useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

type NotificationFunction = (message: string, options?: {}) => void;
type NotificationContextValue = { info: NotificationFunction, success: NotificationFunction, error: NotificationFunction, warning: NotificationFunction };

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

const error: NotificationFunction = (message, options) => {
    toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#121212', color: 'white', border: 'dashed 1px #F24' },
        ...options,
    });
};

const warning: NotificationFunction = (message, options) => {
    toast.warning(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#121212', color: 'white', border: 'dashed 1px #FD4' },
        ...options,
    });
};

const info: NotificationFunction = (message, options) => {
    toast.info(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#121212', color: 'white', border: 'dashed 1px #2DF' },
        ...options,
    });
};

const success: NotificationFunction = (message, options) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#121212', color: 'white', border: 'dashed 1px #2F4' },
        ...options,
    });
};

export function NotificationProvider({ children }: { children: any }) {
    
    const [notificationsContext, setNotificationsContext] = useState<NotificationContextValue | undefined>();

    if (!notificationsContext) {
        setNotificationsContext({
            error,
            warning,
            info,
            success,
        });
    };
    
    return (
        <NotificationContext.Provider value={notificationsContext}>
            <ToastContainer />
            {children}
        </NotificationContext.Provider>
    );
};

export function useNotifications(): NotificationContextValue {
    return useContext(NotificationContext) as NotificationContextValue;
};