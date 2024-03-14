import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './ErrorPage.scss';

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    };

    return (
        /*<div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>*/
        <div className="bg-purple">

            <div className="stars">
                <div className="central-body">
                    <img alt="ima" className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" />
                    <div className="btn-go-home" onClick={handleClick}>GO BACK HOME</div>
                </div>
                <div className="objects">
                    <img alt="ima" className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                    <div className="earth-moon">
                        <img alt="ima" className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                        <img alt="ima" className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
                    </div>
                    <div className="box_astronaut">
                        <img alt="ima" className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
                    </div>

                    <div className="glowing_stars">
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>
                        <div className="star"></div>

                    </div>

                </div>

            </div>
        </div>
    );
}