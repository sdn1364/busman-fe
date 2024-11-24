import useResetPassword from "@/hooks/auth/useResetPassword";
import { PathConstants } from "@/PathConstants";
import Copyright from "@/resources/components/shared/Copyright";
import {
  Button,
  InputField,
  Stack,
  Text,
  Title,
} from "@/resources/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ForgotSchema = z.object({
  email: z
    .string({ message: "Email address is required" })
    .email({ message: "Please enter valid email address" }),
});

type ForgotSchemaType = z.infer<typeof ForgotSchema>;

const Forget = () => {
  const { mutate, isPending, error, isError, isSuccess } = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotSchemaType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ForgotSchema),
  });

  const submit = (values: { email: string }) => {
    mutate(values.email);
  };
  if (isSuccess) {
    return (
      <Stack className="w-[400px]" align="center">
        <Title order={1} className="mb-2">
          Check Your Inbox
        </Title>
        <Text>
          We've sent you an email with a link to reset your password. Please
          check your inbox and follow the instructions in the email.
        </Text>
        <Text>
          If you don't see the email, be sure to check your spam or junk folder.
        </Text>
        <Stack>
          <Text>Still no luck?</Text>
          <Text>
            You can request a new reset link{" "}
            <a
              className="text-green-500 underline"
              href={PathConstants.FORGETPASS}
            >
              here
            </a>
            .
          </Text>
        </Stack>
        <p>
          If you have any questions or need further assistance, feel free to
          reach out to our support team.
        </p>
        <p>Best,</p>
        <Copyright />
      </Stack>
    );
  }

  return (
    <Stack className="w-[400px]">
      <Title order={1} className="mb-2">
        Forgot Your Password?
      </Title>
      <Text>
        No worries! Just enter your email address below, and we’ll send you a
        link to reset your password.
      </Text>
      <form onSubmit={handleSubmit(submit)}>
        <Stack>
          {isError && (
            <p className="text-center text-red-500">{error.message}</p>
          )}

          <InputField
            {...register("email")}
            error={errors.email}
            label="Email"
            placeholder="Email"
            type="email"
          />
          <Button type="submit" loading={isPending}>
            {isPending ? "Sending reset password email..." : "Reset password"}
          </Button>
        </Stack>
      </form>
      <Text>Need help? Feel free to reach out to our support team.</Text>
      <Text>Best,</Text>
      <Copyright />
    </Stack>
  );
};

export default Forget;
