import './Page.scss';

export default function Page(props: any) {
    const handleClick = () => {
        props.onClick(props.pageName);
    }

    return (
        <div className='page_main' onClick={handleClick}>
            <div className={props.isSelected ? "page_icon_bg selected" : "page_icon_bg"}>
                {props.pageIcon}
            </div>
            <div className="page_name">{props.pageName}</div>
        </div>
    );
};