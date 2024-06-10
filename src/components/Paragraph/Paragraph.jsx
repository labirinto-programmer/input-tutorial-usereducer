import './Paragraph.scss';

export const Paragraph = ({paragraphType, taskText, taskState}) => {
    return (
        paragraphType === "task paragraph"
        ? <p className={`paragraph-task ${taskState ? "line-through" : ""}`}>
            {taskText}
        </p>
        : <p className={`paragraph-toast`}>
            {taskText}
        </p>
    );
}