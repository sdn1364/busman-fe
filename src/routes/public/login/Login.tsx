import Logo from "@/components/shared/Logo";
import { Anchor, Stack, Text, Title } from "@/components/ui";
import { useAuth } from "@/hooks";
import { PathConstants } from "@/PathConstants";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";

const Login = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate(PathConstants.DASHBOARD);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <Stack gap="xs" className="w-96">
      <Stack gap="md" fullWidth align="center">
        <Logo size={60} />
        <Stack>
          <Title order={1} className="mb-2 w-full text-center">
            Welcome to Elso
          </Title>
        </Stack>
      </Stack>
      <LoginForm />
      <Text className="py-5" ta="center">
        New to Elso?{" "}
        <Anchor asChild>
          <Link to={PathConstants.REGISTER}>Sign up here</Link>
        </Anchor>
      </Text>
    </Stack>
  );
};

export default Login;
