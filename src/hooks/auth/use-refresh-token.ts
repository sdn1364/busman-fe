import axios from "@/api/axios";
import useAuth from "@/hooks/auth/use-auth.ts";

const UseRefreshToken = () => {
  const { setToken } = useAuth();
  return async () => {
    const response = await axios.post("/auth/refresh",{},  {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setToken((prev) => {
      console.log(JSON.stringify(prev));
      console.log(JSON.stringify(response.data.accessToken));
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };
};

export default UseRefreshToken;
