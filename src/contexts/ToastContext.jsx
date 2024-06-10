import { createContext, useState, useContext } from "react";
import { ToastTask } from '../components/index';
const ToastTaskContext = createContext({});

export const ToastProvider = ({children}) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const handlyShowToast = (message) => {
        setShowToast(true);
        setToastMessage(message);
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    }
    return (
        <ToastTaskContext.Provider value={{handlyShowToast}}>
            <ToastTask showToast={showToast} toastMessage={toastMessage} />
            {children}
        </ToastTaskContext.Provider>
    );
}

export const useToast = () => {
    return useContext(ToastTaskContext);
};