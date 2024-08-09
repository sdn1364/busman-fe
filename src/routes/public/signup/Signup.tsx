import Logo from "@/components/shared/Logo";
import { Anchor, Divider, Stack, Text, Title } from "@/components/ui";
import useAuth from "@/hooks/auth/useAuth";
import { PathConstants } from "@/PathConstants";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupForm from "./components/SignupForm";

const SignUp = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate(PathConstants.DASHBOARD);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <Stack className="w-96" align="center">
      <Stack fullWidth align="center">
        <Logo size={60} />
        <Title order={1} className="mb-2">
          Sign up to Elso
        </Title>
      </Stack>
      <SignupForm />
      <Divider label="Or" />
      <Text>
        Already have an account?{" "}
        <Anchor asChild>
          <Link to={PathConstants.LOGIN}>Log in here</Link>
        </Anchor>
      </Text>
      <Text size="sm" ta="center" className="mt-5 px-8 text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Anchor asChild>
          <Link to={PathConstants.TERMS}>Terms of Service</Link>
        </Anchor>{" "}
        and{" "}
        <Anchor asChild>
          <Link to={PathConstants.PRIVACY}>Privacy Policy</Link>
        </Anchor>
        .
      </Text>
    </Stack>
  );
};

export default SignUp;
