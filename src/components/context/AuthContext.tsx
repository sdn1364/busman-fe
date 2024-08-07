import { supabase } from "@/api/supabase";
import { PathConstants } from "@/PathConstants";
import { User } from "@supabase/supabase-js";

import {
  createContext,
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

export const AuthStateContext = createContext<IAuthContext>({
  user: {},
  auth: false,
} as IAuthContext);
export const AuthActionContext = createContext<IAuthActionsContext>(
  {} as IAuthActionsContext,
);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [auth, setAuth] = useState<boolean | null>(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const { user: currentUser } = data;
      setUser(currentUser ?? null);
      setAuth(currentUser ? true : false);

      setLoading(false);
    };

    getUser();
  }, []);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session) {
        setUser(session.user);
        setAuth(true);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setAuth(false);
      }

      if (event == "PASSWORD_RECOVERY") {
        console.log(session?.user.email);
        navigate(PathConstants.RESETPASSWORD, {
          state: session?.user.email,
        });
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthActionContext.Provider
      value={{
        setUser,
        setAuth,
      }}
    >
      <AuthStateContext.Provider
        value={{
          user,
          auth,
        }}
      >
        {!loading && children}
      </AuthStateContext.Provider>
    </AuthActionContext.Provider>
  );
};

export default AuthProvider;
