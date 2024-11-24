import { useLogin } from "@/hooks";
import { PathConstants } from "@/PathConstants";
import {
  Anchor,
  Button,
  Divider,
  InputField,
  Stack,
  Text,
} from "@/resources/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

const LoginSchema = z.object({
  email: z
    .string({ message: "Email address is required" })
    .email({ message: "Please enter valid email address" }),
  password: z.string().min(6, "Password must be at least 6 character").max(20),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const LoginForm = () => {
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

  return (
    <form onSubmit={handleSubmit(signIn)}>
      {isError && (
        <Text ta="center" className="text-red-500">
          {error.message}
        </Text>
      )}

      <Stack gap="md">
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
        <Anchor className="-mt-5 text-right" asChild>
          <Link to={PathConstants.FORGET_PASS}>Forgot password?</Link>
        </Anchor>
        <Button type="submit" loading={isPending}>
          {isPending ? "Signing you in ..." : "Continue"}
        </Button>
        <Divider label="Or continue with" />
        <Button variant="outline">Login with Google</Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
