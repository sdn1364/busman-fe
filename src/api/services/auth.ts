import axios, { axiosPrivate } from "../axios";

export const login = async (data: UserLoginData) => {
  return await axios
    .post("/auth/login", {
      email: data.email,
      password: data.password,
    })
    .then((res) => res.data)
    .catch((err) => err);
};

export const getRefreshToken = async (refreshToken: string) => {
  return await axios.post(
    "/auth/refresh",
    {},
    {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  );
};

export const logout = async (accessToken: string) => {
  return await axiosPrivate.post(
    "/auth/logout",
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    },
  );
};
