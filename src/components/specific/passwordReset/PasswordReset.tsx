import { useEffect, useState } from 'react';
import './PasswordReset.scss';
import { supabase } from 'src/config/supabase-client';
import { SupabaseAuthClient } from '@supabase/supabase-js/dist/module/lib/SupabaseAuthClient';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

function PasswordReset() {
    const [newPassword, setNewPassword] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleAuthStateChange = async (event: AuthChangeEvent, session: Session | null) => {
            if (submitted) {
                try {
                    const { data, error } = await (supabase.auth as SupabaseAuthClient).updateUser({ password: newPassword });
                } catch (error) {
                    console.error("Error updating password:", error);
                } finally {
                    setSubmitted(false);
                }
            }
        };

        supabase.auth.onAuthStateChange(handleAuthStateChange);
    }, [newPassword, submitted])

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            // Redirect the user to home page
            navigate('/');
        }, 2000);
    };

    return (
        <div className="PasswordReset_container">
            <form onSubmit={handleSubmit} className="PasswordReset_form">
                <label className="PasswordReset_label">
                    New Password:
                    <input type="password" value={newPassword} onChange={handlePasswordChange} className="PasswordReset_input" />
                </label>
                <button type="submit" className="PasswordReset_button">Submit</button>
            </form>
        </div>
    );
}

export default PasswordReset;
