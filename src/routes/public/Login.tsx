import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import InputField from "@/components/ui/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "@/hooks/auth/useLogin";
import Divider from "@/components/ui/Divider";
import { PathConstants } from "@/PathConstants";
import useAuth from "@/hooks/auth/useAuth";
import { useEffect } from "react";
import Logo from "@/assets/logo_white.svg";

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
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <>
      <Link to={PathConstants.REGISTER} className="absolute right-5 top-5">
        <Button variant="outline">Sing up</Button>
      </Link>
      <div className="w-96">
        <div className="flex w-full flex-col items-center gap-5">
          <img src={Logo} alt="elso logo" width="45" />
          <div>
            <h1 className="mb-2 w-full text-center text-3xl font-bold">
              Welcome to Elso Manager
            </h1>
            <h2 className="mb-10 w-full text-center text-xl">
              Simple bussiness management
            </h2>
          </div>
        </div>
        {isError && <p className="text-center text-red-500">{error.message}</p>}
        <form onSubmit={handleSubmit(signIn)}>
          <div className="flex h-auto w-96 flex-col gap-5">
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
            <Button type="submit" disabled={isPending}>
              {isPending ? "Signing you in ..." : "Continue"}
            </Button>
            <Divider label="Or continue with" />
            <Button variant="outline">Login with Google</Button>
          </div>
        </form>
        <p className="mt-5 px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            to={PathConstants.TERMS}
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to={PathConstants.PRIVACY}
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default Login;
