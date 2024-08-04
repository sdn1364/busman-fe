type User = {
  email: string;
  name: string;
  lastName: string;
};

type UserLoginData = {
  email: string;
  password: string;
};

type UserSignupData = {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
};
