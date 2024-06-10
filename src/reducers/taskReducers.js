import { v4 as uuidv4 } from "uuid";

export const taskReducers = (currentTask, action) => {
    switch(action.type) {
        case "added": 
            const taskFig = {
                taskId: uuidv4(), 
                taskText: action.payload.addTask, 
                isCompleted: false
            };
            if(action.payload.addTask.length >= 1) {
                const addNewTask = [...currentTask, taskFig];
                localStorage.setItem("taskStorage", JSON.stringify(addNewTask));
                return addNewTask;
            }
        break;
        case "deleted": 
            const newTaskInfo = currentTask.filter((task) => {
                return task.taskId !== action.payload.id;
            });
            localStorage.setItem("taskStorage", JSON.stringify(newTaskInfo));
            return newTaskInfo;
        case "updated": 
            if(action.payload.updateTask.length >= 1) {
                const newUpdateTask = currentTask.map((task) => {
                    if(task.taskId === action.payload.id) {
                        return {...task, taskText: action.payload.updateTask};
                    } 
                    return task;
                });
                localStorage.setItem("taskStorage", JSON.stringify(newUpdateTask));
                return newUpdateTask;
            }
        break;
        case "updatedstate": 
            const newTaskState = currentTask.map((task) => {
                if(task.taskId === action.payload.id) {
                    const updateState = {
                        ...task, isCompleted: !task.isCompleted
                    }
                    return updateState;
                } 
                return task;
            });
            localStorage.setItem("taskStorage", JSON.stringify(newTaskState));
            return newTaskState;
        case "get": 
            const storageTask = JSON.parse(localStorage.getItem("taskStorage")) || [];
            return storageTask;
        default: {
            throw Error(`Unknown Action ${action.type}`);
        }
    }
    return [];
};