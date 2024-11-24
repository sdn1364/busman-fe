type TokenData = {
  accessToken: string;
  refreshToken: string;
};

interface IAuthContext {
  isAuthenticated: boolean | null;
  user: User;
}

interface IAuthActionsContext {
  setIsAuthenticated: React.Dispatch<SetStateAction<boolean>>;
}
