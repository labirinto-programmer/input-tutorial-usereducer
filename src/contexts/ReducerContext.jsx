import { createContext, useContext, useReducer, useEffect } from "react";
import { taskReducers } from "../reducers/taskReducers";
const ReducerContext = createContext([]);
const DispatchContext = createContext(null);

export const ReducerProvider = ({children}) => {
    const [taskInfo, dispatchTask] = useReducer(taskReducers, []);
    useEffect(()=> {
        dispatchTask({ type: "get" });
    }, []);
    return (
        <ReducerContext.Provider value={taskInfo}>
            <DispatchContext.Provider value={dispatchTask}>
                {children}
            </DispatchContext.Provider>
        </ReducerContext.Provider>
    );
}

export const useReducerProvider = () => {
    return useContext(ReducerContext);
};
export const useDispatchProvider = () => {
    return useContext(DispatchContext);
};