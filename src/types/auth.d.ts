type TokenData = {
  accessToken: string;
  refreshToken: string;
};

interface IAuthContext {
  auth: boolean | null;
  user: User | null;
}

interface IAuthActionsContext {
  setAuth: React.Dispatch<SetStateAction<boolean>>;
  setUser: React.Dispatch<SetStateAction<object>>;
}
