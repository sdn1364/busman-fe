import { Button, Divider, Group, InputField, Stack } from "@/components/ui";
import useSignUp from "@/hooks/auth/useSignup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
const SignupForm = () => {
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

  if (isError) {
    return <>{error.message}</>;
  }
  return (
    <form onSubmit={handleSubmit(signup)}>
      <Stack fullWidth gap="sm">
        <Group gap="sm">
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
        </Group>
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
      </Stack>
    </form>
  );
};

export default SignupForm;
