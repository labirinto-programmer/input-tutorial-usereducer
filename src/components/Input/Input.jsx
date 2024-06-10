import { useTaskInput } from "../../contexts/TaskContext";
import './Input.scss';

export const Input = ({inputSize, placeHolder}) => {
    const {addTaskInputValue, setAddTaskInputValue,
        updateTaskInputValue, setUpdateTaskInputValue} = useTaskInput();
    const inputClass = ["large", "small"];
    const handleAddTaskInputChange = (value) => {
        setAddTaskInputValue(value);
    }
    const handleUpdateTaskInputChange = (value) => {
        setUpdateTaskInputValue(value);
    }
    return (
        inputClass.map((clas, i) => {
            return (
                inputSize === clas 
                ? <input className={`input-${clas}`} 
                placeholder={placeHolder} key={i}
                value={
                    placeHolder === "add task" 
                    ? addTaskInputValue 
                    : updateTaskInputValue
                } 
                onChange={(ev) => { 
                    placeHolder === "add task"
                    ? handleAddTaskInputChange(ev.target.value)
                    : handleUpdateTaskInputChange(ev.target.value);
                }}/>
                : ''
            )
        })
    );
}

/*

inputSize === clas 
                ? <input className={`input-${clas}`} 
                placeholder={placeHolder} key={i}
                value={taskInputValue} 
                onChange={(ev) => {
                    handleTaskInputChange(ev.target.value);
                }}/>
                : ''



                (() => {
                    if (inputSize === clas){
                        return (
                            (() => {
                                if (placeHolder === "add task"){
                                    return (
                                        <input className={`input-${clas}`} 
                                        placeholder={placeHolder} key={i}
                                        value={addTaskInputValue} 
                                            onChange={(ev) => {
                                                handleAddTaskInputChange(ev.target.value);
                                        }}/>
                                    )
                                }else if (placeHolder === "edit task"){
                                    return (
                                        <input className={`input-${clas}`} 
                                        placeholder={placeHolder} key={i}
                                        value={updateTaskInputValue} 
                                            onChange={(ev) => {
                                                handleUpdateTaskInputChange(ev.target.value);
                                        }}/>
                                    )
                                }
                            })()
                        )
                    }
                    return "";
                })()

*/