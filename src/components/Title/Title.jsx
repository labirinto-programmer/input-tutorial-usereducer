import './Title.scss';

export const TitleList = ({titleText}) => {
    return (
        <h1 className="main-title">
            {titleText}
        </h1>
    );
}