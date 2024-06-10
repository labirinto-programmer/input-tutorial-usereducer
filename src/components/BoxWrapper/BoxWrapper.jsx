import { TitleList, TabToDo, TaskWrapper, EditBox, AddWrapper } from '../index';
import './BoxWrapper.scss';

export const BoxWrapper = () => {
    return (
        <div className="box-wrapper">
            <TitleList titleText="my task" />
            <TabToDo />
            <TaskWrapper />
            <EditBox />
            <AddWrapper />
        </div>
    );
}