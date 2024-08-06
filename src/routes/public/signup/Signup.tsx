import Divider from "@/components/ui/Divider";
import InputField from "@/components/ui/InputField.tsx";
import { Button } from "@/components/ui/button.tsx";
import useSignUp from "@/hooks/auth/useSignup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Logo from "@/assets/logo_white.svg";
import { PathConstants } from "@/PathConstants";
import { useEffect } from "react";
import useAuth from "@/hooks/auth/useAuth";

const SignupSchema = z.object({
  email: z
    .string({ message: "Email address is required" })
    .email({ message: "Please enter valid email address" }),
  password: z.string().min(6, "Password must be at least 6 characters").max(20),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
});

type SignupSchemaType = z.infer<typeof SignupSchema>;

const SignUp = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(SignupSchema),
  });

  const { mutate, error, isError, isPending } = useSignUp();

  const signup = (data: SignupSchemaType) => {
    mutate(data);
  };

  useEffect(() => {
    if (auth) {
      navigate(PathConstants.DASHBOARD);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  if (isError) {
    return <>{error.message}</>;
  }

  return (
    <>
      <div className="flex w-full flex-col items-center gap-5">
        <img src={Logo} alt="elso logo" width="45" />
        <div>
          <h1 className="mb-2 w-full text-center text-3xl font-bold">
            Sign up to Elso Manager
          </h1>
          <h2 className="mb-10 w-full text-center text-xl">
            Just one step left to simple management
          </h2>
        </div>
      </div>
      <form onSubmit={handleSubmit(signup)}>
        <div className="flex h-auto w-96 flex-col gap-5">
          <div className="flex flex-row gap-5">
            <InputField
              error={errors.first_name}
              {...register("first_name")}
              label="Name"
              placeholder="Name"
              type="text"
            />
            <InputField
              error={errors.last_name}
              {...register("last_name")}
              label="Last name"
              placeholder="Last name"
              type="text"
            />
          </div>
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
            {isPending ? "Signing up ..." : "Sing up"}
          </Button>
          <Divider label="Or continue with" />
          <Button variant="outline">Signup with Google</Button>
        </div>
      </form>
      <Divider label="Or" />
      <p>
        Already have an account?{" "}
        <Link
          to={PathConstants.LOGIN}
          className="text-primary underline underline-offset-4"
        >
          Log in here
        </Link>
      </p>
    </>
  );
};

export default SignUp;
