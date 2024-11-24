import { PathConstants } from "@/PathConstants";
import Logo from "@/resources/components/shared/Logo";
import { Anchor, Stack, Text, Title } from "@/resources/components/ui";
import { Link } from "@tanstack/react-router";
import LoginForm from "./components/LoginForm";

const LoginView = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Stack gap="xs" className="w-96">
        <Stack gap="md" align="center">
          <Logo size={60} />
          <Stack>
            <Title order={1} className="mb-2 w-full text-center">
              Welcome to Elso
            </Title>
          </Stack>
        </Stack>
        <LoginForm />
        <Text className="py-5" ta="center">
          New to Elso?
          <Anchor asChild>
            <Link href={PathConstants.REGISTER}>Sign up here</Link>
          </Anchor>
        </Text>
      </Stack>
    </div>
  );
};

export default LoginView;
