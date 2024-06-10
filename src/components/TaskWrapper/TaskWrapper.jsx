import { useMemo } from "react";
import { useReducerProvider} from "../../contexts/ReducerContext";
import { useTaskInput } from "../../contexts/TaskContext";
import { Paragraph, BtnWrapper } from '../index';
import './TaskWrapper.scss';

export const TaskWrapper = () => {
    const taskInfo = useReducerProvider();
    const {tabListState} = useTaskInput();
    const completedTask = useMemo(() => {
        return taskInfo.filter((task) => {
            return task.isCompleted;
        });
    }, [taskInfo]);
    const notCompletedTask = useMemo(() => {
        return taskInfo.filter((task) => {
            return !task.isCompleted;
        });
    }, [taskInfo]);
    let taskToBeRendered = taskInfo;
    if(tabListState === "done") {
        taskToBeRendered = completedTask;
    } else if (tabListState === "undone") {
        taskToBeRendered = notCompletedTask;
    } else {
        taskToBeRendered = taskInfo;
    }
    return (
        <div className="tasks-box">
            {
                taskToBeRendered.map(({taskId, taskText, isCompleted}) => {
                    return (
                        <div className="task-wrapper fb-fourthly" key={taskId}>
                            <Paragraph taskText={taskText} 
                            taskState={isCompleted} 
                            paragraphType = "task paragraph"/>
                            <BtnWrapper keyTask={taskId} 
                            btnCompleted={isCompleted}/>
                        </div>
                    )
                })
            }
        </div>
    );
}