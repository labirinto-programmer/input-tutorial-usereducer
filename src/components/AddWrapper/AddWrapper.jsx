import { Input, Btn } from '../index';
import './AddWrapper.scss';

export const AddWrapper = () => {
    return (
        <div className="add-wrapper fb-fourthly gap-fourthly">
            <Input inputSize="large" placeHolder="add task" />
            <Btn btnType="add" />
        </div>
    );
}