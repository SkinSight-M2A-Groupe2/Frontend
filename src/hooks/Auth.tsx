/* import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../config/supabase-client";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = (email :string, password:string) =>
  supabase.auth.signInWithPassword({ email, password });

const signOut = () => supabase.auth.signOut();

const passwordReset = (email:string) =>
  supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/update-password"
  });

const updatePassword = (updatedPassword :any) =>
  supabase.auth.updateUser({ password: updatedPassword });

const AuthProvider = ({ children }:any) => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null| unknown );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const { user: currentUser } = data;
      setUser(currentUser ?? null);
      setAuth(currentUser ? true : false);
      setLoading(false);
    };
    getUser();
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "PASSWORD_RECOVERY") {
        setAuth(false);
      } else if (event === "SIGNED_IN") {
        setUser(session?.user);
        setAuth(true);
      } else if (event === "SIGNED_OUT") {
        setAuth(false);
        setUser(null);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        user,
        login,
        signOut,
        passwordReset,
        updatePassword
      }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; */
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "../config/supabase-client";

/* interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  created_at?: Date;
  phone?: string;
  is_professional?: boolean;
  // Add other user properties as needed
} */

interface AuthContextType {
  auth: boolean;
  profile: any;
  //user: User | null;
  user: any;
    session:any;    

  login: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
  passwordReset: (email: string) => Promise<any>;
  updatePassword: (updatedPassword: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType>({
  auth: false,
  user: null,
  profile:null,
  session:null,
  login: async () => {},
  signOut: async () => {},
  passwordReset: async () => {},
  updatePassword: async () => {},
});

export const useAuth = () => useContext(AuthContext);

const login = async (email: string, password: string) =>
  supabase.auth.signInWithPassword({ email, password });

const signOut = async () => supabase.auth.signOut();

const passwordReset = async (email: string) =>
  supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/update-password"
  });

const updatePassword = async (updatedPassword: string) =>
  supabase.auth.updateUser({ password: updatedPassword });

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<any| null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [profile, setProfile] = useState<any | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
    const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      
      if (error) {
        console.error("Error fetching user:", error.message);
        return;
      }
      const currentUser = data?.user;
      //console.log(currentUser);
      setUser(currentUser ?? null);
      setAuth(!!currentUser);
      setLoading(false);
    };
    
    getUser();

    

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        if (event === "PASSWORD_RECOVERY") {
          setAuth(false);
        } else if (event === "SIGNED_IN") {
          setUser(session?.user ?? null);
          setAuth(true);
          if (session?.user) {
            //getProfile();
            //setAccessToken(session?.access_token);
          }
        } else if (event === "SIGNED_OUT") {
          setAuth(false);
          setUser(null);
          setProfile(null);
          //setAccessToken(null);
        } else if (event === "USER_UPDATED"){
           // getProfile();
        } else if (event === "TOKEN_REFRESHED"){
            console.log('TOKEN_REFRESHED');
            //getProfile();
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const getProfile = async () => {
        try {
          const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id);
          if (error) {
            console.error("Error fetching user profile:", error.message);
            return;
          }
          setProfile(data[0]);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      };
      getProfile();
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        user,
        profile,
        session,
        login,
        signOut,
        passwordReset,
        updatePassword
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;