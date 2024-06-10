import { createContext, useState, useContext} from "react";
// import { useReducerProvider, useDispatchProvider } from "./ReducerContext";
const TaskInputContext = createContext([]);

export const TaskInputProvider = ({children}) => {
    // const taskInfo = useReducerProvider();
    // const dispatchTask = useDispatchProvider();
    const [addTaskInputValue, setAddTaskInputValue] = useState("");
    const [updateTaskInputValue, setUpdateTaskInputValue] = useState("");
    const [editeTost, setEditeTost] = useState("");
    const [taskNumEdite, setTaskNumEdite] = useState(null);
    const [tabListState, setTabListState] = useState("all");
    const tabClickChangeState = (state) => {
        setTabListState(state);
    }
    // useEffect(()=> {
    //     dispatchTask({ type: "get" });
    // }, []);
    return (
        <TaskInputContext.Provider value={{
            addTaskInputValue, setAddTaskInputValue,
            updateTaskInputValue, setUpdateTaskInputValue,
            editeTost, setEditeTost, taskNumEdite, 
            setTaskNumEdite, tabListState, tabClickChangeState}}>
            {children}
        </TaskInputContext.Provider>
    );
}

export const useTaskInput = () => {
    return useContext(TaskInputContext);
};