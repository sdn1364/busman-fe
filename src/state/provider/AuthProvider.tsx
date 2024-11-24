import { supabase } from "@/models/api/supabase";
import { PathConstants } from "@/PathConstants";
import {
  AuthActionContext,
  AuthStateContext,
} from "@/state/context/AuthContext";
import { User } from "@supabase/supabase-js";
import { useNavigate } from "@tanstack/react-router";
import { PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [Loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    setLoading(true);
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const { user: currentUser } = data;
      setUser(currentUser ?? null);
      setIsAuthenticated(currentUser ? true : false);

      setLoading(false);
    };

    getUser();
  }, []);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session) {
        setUser(session.user);
        setIsAuthenticated(true);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setIsAuthenticated(false);
      }

      if (event == "PASSWORD_RECOVERY") {
        console.log(session?.user.email);
        navigate({ to: PathConstants.RESETPASSWORD });
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
        setIsAuthenticated,
      }}
    >
      <AuthStateContext.Provider
        value={{
          isAuthenticated,
          user,
        }}
      >
        {!Loading && children}
      </AuthStateContext.Provider>
    </AuthActionContext.Provider>
  );
};

export default AuthProvider;
