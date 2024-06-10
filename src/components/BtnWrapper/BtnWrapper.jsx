import { Btn } from '../index';
import './BtnWrapper.scss';

export const BtnWrapper = ({keyTask, btnCompleted}) => {
    const btnContent = ["done", "edit", "delete"];
    return (
        <div className="btn-wrapper fb-secondary gap-fourthly">
            {
                btnContent.map((content, i) => {
                    return (
                        <Btn btnType={content} key={i} 
                        keyTask={keyTask} btnCompleted={btnCompleted}/>
                    )
                })
            }
        </div>
    );
}