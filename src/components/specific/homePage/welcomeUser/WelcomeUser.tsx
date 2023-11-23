import './WelcomeUser.scss';

export default function WelcomeUser(props: any) {
    return (
        <div className="welcomeUser-container">
            <div className="welcomeUser-welcome">
                Welcome back,
            </div>
            <div className="welcomeUser-name">
                {props.username} 👋
            </div>
            <div className="welcomeUser-button">
                <button className="welcomeUser-button-check">
                    Check profile
                </button>
            </div>
        </div>
    );
}
