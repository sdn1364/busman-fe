type TokenData = {
  accessToken: string;
  refreshToken: string;
};

interface IAuthContext {
  setAuth: React.Dispatch<SetStateAction<boolean>>;
  setUser: React.Dispatch<SetStateAction<object>>;
  auth: boolean | null;
  user: User | null;
}
