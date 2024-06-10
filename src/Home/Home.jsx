import { ReducerProvider } from "../contexts/ReducerContext";
import { TaskInputProvider } from "../contexts/TaskContext";
import { ToastProvider } from "../contexts/ToastContext";
import { BoxWrapper } from '../components/index';
import './Home.scss';

export const Home = () => {
    return (
        <ReducerProvider>
            <TaskInputProvider>
                <ToastProvider>
                    <BoxWrapper />
                </ToastProvider>
            </TaskInputProvider>
        </ReducerProvider>
    );
}