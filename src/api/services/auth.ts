import { supabase } from "../supabase";

export const login = async (data: UserLoginData) => {
  return supabase.auth
    .signInWithPassword({
      email: data.email,
      password: data.password,
    })
    .then((res) => res.data);
};

export const logout = async () => {
  return supabase.auth.signOut();
};

export const singup = ({
  email,
  password,
  first_name,
  last_name,
}: UserSignupData) => {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,
      },
    },
  });
};
