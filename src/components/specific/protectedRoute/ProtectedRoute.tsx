import './ProtectedRoute.scss';
import { Navigate, Outlet } from "react-router-dom";

import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from 'src/config/supabase-client'
import { useContext, useEffect, useState } from 'react';
interface ProtectedRouteProps {
    user: any;
    children?: any;
    redirectPath?: string;
}

const Container = (props: any) => {
    const { user } = Auth.useUser()
    if (user || localStorage.getItem('user'))
        return props.componentToRender ? <Navigate to={props.componentToRender} replace /> : <Outlet />;

    return props.children
}

function ProtectedRoute({ user, children, redirectPath = '/' }: ProtectedRouteProps) {

    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }: any) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session: any) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    if (session) {
        //set localstorage with user data
        localStorage.setItem('user', JSON.stringify(session));
    }


    return (
        <Auth.UserContextProvider supabaseClient={supabase}>
            <Container supabaseClient={supabase} componentToRender={children} >
                <div className="login_container">
                    <div className="login_insider">
                        <Auth
                            supabaseClient={supabase}
                            appearance={{
                                theme: ThemeSupa,
                                variables: {
                                    default: {
                                        colors: {
                                            brand: '#71c4ef',
                                            brandAccent: '#00668c',
                                            brandButtonText: 'black',
                                            inputLabelText: 'black',
                                        },
                                        radii: {
                                            buttonBorderRadius: '10px',
                                            inputBorderRadius: '5px',
                                        },
                                        borderWidths: {
                                            buttonBorderWidth: '0px',
                                            inputBorderWidth: '1px',
                                        },
                                        fontSizes: {
                                            baseBodySize: '13px',
                                            baseInputSize: '14px',
                                            baseLabelSize: '14px',
                                            baseButtonSize: '14px',
                                        },
                                        fonts: {
                                            bodyFontFamily: `Roboto, sans-serif`,
                                            buttonFontFamily: `Roboto, sans-serif`,
                                            inputFontFamily: `Roboto, sans-serif`,
                                            labelFontFamily: `Roboto, sans-serif`,
                                        },
                                    },
                                },
                            }}
                            providers={[]}
                        />
                    </div>

                </div>
            </Container>
        </Auth.UserContextProvider>
    )


}

export default ProtectedRoute;
