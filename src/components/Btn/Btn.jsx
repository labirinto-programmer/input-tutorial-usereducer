import { useReducerProvider, useDispatchProvider } from "../../contexts/ReducerContext";
import { useTaskInput } from "../../contexts/TaskContext";
import { useToast } from "../../contexts/ToastContext";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import './Btn.scss';

export const Btn = ({btnType, keyTask, btnCompleted}) => {
    const taskInfo = useReducerProvider();
    const dispatchTask = useDispatchProvider();
    const {addTaskInputValue, setAddTaskInputValue, editeTost, 
        setEditeTost, updateTaskInputValue, setUpdateTaskInputValue, 
        taskNumEdite, setTaskNumEdite} = useTaskInput();
    const {handlyShowToast} = useToast();
    const btnClass = [
        {
            icon: <FaCheck className="btn-icon"/>,
            clas: "done"
        },
        {
            icon: <MdOutlineEdit className="btn-icon"/>,
            clas: "edit"
        },
        {
            icon: <MdDeleteOutline className="btn-icon"/>,
            clas: "delete"
        },
        {
            icon: "add",
            clas: "add"
        },
        {
            icon: "change",
            clas: "change"
        }
    ];
    const handleBtnTaskInputAdd = () => {
        dispatchTask({
            type: "added",
            payload: {
                addTask: addTaskInputValue
            }
        });
        setAddTaskInputValue("");
        handlyShowToast("added successfully");
    }
    const handleBtnChangeTaskState = () => {
        dispatchTask({
            type: "updatedstate",
            payload: { id: keyTask }
        });
        taskInfo.map((task) => {
            return task.isCompleted 
            ? handlyShowToast("added to done successfully")
            : handlyShowToast("added to undone successfully");
        });
    }
    const handleBtnDeleteClick = () => {
        dispatchTask({
            type: "deleted",
            payload: { id: keyTask }
        });
        handlyShowToast("deleted successfully");
    }
    const handleBtnEditeTost = () => {
        editeTost ? setEditeTost("") : setEditeTost("active");
        setTaskNumEdite(keyTask);
    }
    const handleBtnTaskInputUpdate = () => {
        dispatchTask({
            type: "updated",
            payload: {
                updateTask: updateTaskInputValue,
                id: taskNumEdite 
            }
        });
        setUpdateTaskInputValue("");
        handlyShowToast("updated successfully");
    }
    return (
        btnClass.map(({icon, clas}, i) => {
            return (
                (() => {
                    if (btnType === clas){
                        return (
                            (() => {
                                if (clas === "done"){
                                    return (
                                        <button className={`btn-${clas} fb-secondary
                                        ${btnCompleted ? "active" : ""}`} 
                                        key={i} onClick={handleBtnChangeTaskState}>
                                            {icon}
                                        </button>
                                    )
                                }else if (clas === "edit"){
                                    return (
                                        <button className={`btn-${clas} fb-secondary`} 
                                        key={i} onClick={(e) => {handleBtnEditeTost(e);}}>
                                            {icon}
                                        </button>
                                    )
                                }else if (clas === "delete"){
                                    return (
                                        <button className={`btn-${clas} fb-secondary`} 
                                        key={i} onClick={() => {handleBtnDeleteClick();}}>
                                            {icon}
                                        </button>
                                    )
                                }else if (clas === "add"){
                                    return (
                                        <button className={`btn-${clas} fb-secondary`} 
                                        key={i} onClick={handleBtnTaskInputAdd}>
                                            {icon}
                                        </button>
                                    )
                                }else if (clas === "change"){
                                    return (
                                        <button className={`btn-${clas} fb-secondary`} 
                                        key={i} onClick={() => 
                                        {handleBtnTaskInputUpdate(); 
                                        handleBtnEditeTost();}}>
                                            {icon}
                                        </button>
                                    )
                                }
                            })()
                        )
                    }
                    return "";
                })()
            )
        })
    )
}