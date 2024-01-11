import './UserOption.scss';
import { supabase } from 'src/config/supabase-client'

function optionAction(option: string) {
    switch (option) {

        case "Deconnexion":
            supabase.auth.signOut()
            break;

        case "Parametres":
            alert("Parametres")
            break;

        default:
            break;
    }
}


export default function UserOption(props: any) {
    return (
        <div className='userOption_main' onClick={() => optionAction(props.userOptionName)}>
            <div className="userOption_icon_bg">
                {props.userOptionIcon}
            </div>
            <div className="userOption_name">{props.userOptionName}</div>
        </div>
    );
};