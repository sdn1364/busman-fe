import { supabase } from "../supabase";

export const login = async (data: UserLoginData) => {
  const { data: loginData, error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    throw error;
  }

  return loginData;
};

export const logout = async () => {
  return supabase.auth.signOut();
};

export const singup = async ({
  email,
  password,
  first_name,
  last_name,
}: UserSignupData) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name,
        last_name,
      },
    },
  });
  if (error) {
    throw error;
  }

  return data;
};
