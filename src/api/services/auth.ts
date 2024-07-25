import axios from "../axios";

export const login = async (data: UserLoginData) => {
  return await axios.post("/api/login", {
    email: data.email,
    password: data.password,
  });
};

export const getRefreshToken = async (refreshToken: string) => {
  return await axios.post(
    "/api/refresh",
    {},
    {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  );
};
