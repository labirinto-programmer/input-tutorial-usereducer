import { Paragraph } from '../index';
import "./ToastTask.scss";

export const ToastTask = ({showToast, toastMessage}) => {
    return (
        <div className={`toast-box ${showToast ? "active" : ""}`}>
            <Paragraph taskText={toastMessage}  
            paragraphType = "toast paragraph"/>
        </div>
    );
}