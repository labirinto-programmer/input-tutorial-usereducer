import { useTaskInput } from "../../contexts/TaskContext";
import { Input, Btn } from '../index';
import './EditBox.scss';

export const EditBox = () => {
    const {editeTost, setEditeTost} = useTaskInput();
    const handleBtnEditeTost = () => {
        editeTost ? setEditeTost("") : setEditeTost("active");
    }
    return (
        <div className={`edit-bc ${editeTost}`} 
        onClick={handleBtnEditeTost}>
            <div className="edit-box fb-fourthly" 
            onClick={(e) => e.stopPropagation()}>
                <Input inputSize="large" placeHolder="edit task" />
                <Btn btnType="change" />
            </div>
        </div>
    );
}