type TokenData = {
  accessToken: string;
  refreshToken: string;
};

interface IAuthContext {
  setToken: React.Dispatch<SetStateAction<string>>;
  token: string | null;
}
