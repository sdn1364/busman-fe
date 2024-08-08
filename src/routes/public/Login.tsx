import Logo from "@/assets/logo_white.svg";
import {
  Button,
  Divider,
  InputField,
  Stack,
  Text,
  Title,
} from "@/components/ui";
import { useAuth, useLogin } from "@/hooks";
import { PathConstants } from "@/PathConstants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const LoginSchema = z.object({
  email: z
    .string({ message: "Email address is required" })
    .email({ message: "Please enter valid email address" }),
  password: z.string().min(6, "Password must be at least 6 character").max(20),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const Login = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    defaultValues: {
      email: "sdn1364@gmail.com",
      password: "123456",
    },
    resolver: zodResolver(LoginSchema),
  });

  const { mutate, isPending, error, isError } = useLogin();

  const signIn = (data: LoginSchemaType) => {
    mutate(data);
  };

  useEffect(() => {
    if (auth) {
      navigate(PathConstants.DASHBOARD);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <div className="w-96">
      <Stack gap="md" fullWidth align="center">
        <img src={Logo} alt="elso logo" width="45" />
        <Stack>
          <Title order={1} className="mb-2 w-full text-center">
            Welcome to Elso Manager
          </Title>
          <Title order={3} className="mb-10 w-full text-center text-xl">
            Simple bussiness management
          </Title>
        </Stack>
      </Stack>
      {isError && <p className="text-center text-red-500">{error.message}</p>}
      <form onSubmit={handleSubmit(signIn)}>
        <Stack fullWidth gap="md">
          <InputField
            error={errors.email}
            label="Email"
            placeholder="Email"
            type="email"
            {...register("email")}
          />
          <InputField
            error={errors.password}
            label="Password"
            placeholder="Password"
            type="password"
            {...register("password", { required: true })}
          />
          <a
            href={PathConstants.FORGETPASS}
            className="-mt-5 text-right text-sm hover:text-green-500"
          >
            Forgot password?
          </a>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Signing you in ..." : "Continue"}
          </Button>
          <Divider label="Or continue with" />
          <Button variant="outline">Login with Google</Button>
        </Stack>
      </form>
      <Text className="py-5" ta="center">
        New to Elso Manager?{" "}
        <Link
          to={PathConstants.REGISTER}
          className="text-primary underline underline-offset-4 hover:text-green-500"
        >
          Sign up here
        </Link>
      </Text>
      <Text size="sm" ta="center" className="mt-5 px-8 text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          to={PathConstants.TERMS}
          className="underline underline-offset-4 hover:text-green-500 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          to={PathConstants.PRIVACY}
          className="underline underline-offset-4 hover:text-green-500 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </Text>
    </div>
  );
};

export default Login;
