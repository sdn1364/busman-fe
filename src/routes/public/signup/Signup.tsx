import InputField from "@/components/ui/InputField.tsx";
import { Button } from "@/components/ui/button.tsx";
import useSignUp from "@/hooks/auth/useSignup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

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

  const { mutate, error, isError } = useSignUp();

  const signup = (data: SignupSchemaType) => {
    mutate(data);
  };

  if (isError) {
    return <>{error.message}</>;
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-5 text-3xl font-bold">Sign up</h1>
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

          <Button type="submit">Sign up</Button>
        </div>
      </form>
      <p className="my-5 text-xl font-bold">or</p>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
