import { useRouteError } from "react-router-dom";

// import './EmailConfirmedPage.scss';
import logo_confirmed from 'src/assets/icons/email_confirmed.png'

export default function EmailConfirmedPage() {
    const error: any = useRouteError();
    console.error(error);

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
                    <img alt="ima" className="image-404" src={logo_confirmed} width="300px" />
                    <div className="text-confirmation">VOTRE EMAIL EST CONFIRMÉ</div>
                    <a href="/" className="btn-go-home">Suivant</a>
                </div>
                <div className="objects">
                    <img alt="ima" className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                    <div className="earth-moon">
                        <img alt="ima" className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                        <img alt="ima" className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
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