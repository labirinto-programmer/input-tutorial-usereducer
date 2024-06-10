import { useTaskInput } from "../../contexts/TaskContext";
import './Tab.scss';

export const TabToDo = () => {
    const {tabListState, tabClickChangeState} = useTaskInput();
    const tabList = ["all", "done", "undone"];
    return (
        <ul className="tab-menu fb-secondary gap-secondary">
            {
                tabList.map((tab, i) => {
                    return (
                        <li key={i} className={`tab-list ${tab === tabListState ? "active" : ""}`}
                        onClick={(e)=> {tabClickChangeState(e.target.textContent)}}>
                            {tab}
                        </li>
                    )
                })
            }
        </ul>
    );
}