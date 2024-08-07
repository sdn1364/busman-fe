import Copyright from "@/components/shared/Copyright";
import { Button } from "@/components/ui/button";
import InputField from "@/components/ui/InputField";
import useResetPassword from "@/hooks/auth/useResetPassword";
import { PathConstants } from "@/PathConstants";
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
      <div className="flex w-[400px] flex-col gap-5">
        <h1 className="mb-2 w-full text-3xl font-bold">Check Your Inbox</h1>
        <p>
          We've sent you an email with a link to reset your password. Please
          check your inbox and follow the instructions in the email.
        </p>
        <p>
          If you don't see the email, be sure to check your spam or junk folder.
        </p>
        <div>
          <p>Still no luck?</p>
          <p>
            You can request a new reset link{" "}
            <a
              className="text-green-500 underline"
              href={PathConstants.FORGETPASS}
            >
              here
            </a>
            .
          </p>
        </div>
        <p>
          If you have any questions or need further assistance, feel free to
          reach out to our support team.
        </p>
        <p>Best,</p>
        <Copyright />
      </div>
    );
  }

  return (
    <div className="flex w-[400px] flex-col gap-5">
      <h1 className="mb-2 w-full text-3xl font-bold">Forgot Your Password?</h1>
      <p>
        No worries! Just enter your email address below, and we’ll send you a
        link to reset your password.
      </p>
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
        {isError && <p className="text-center text-red-500">{error.message}</p>}

        <InputField
          {...register("email")}
          error={errors.email}
          label="Email"
          placeholder="Email"
          type="email"
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Sending reset password email..." : "Reset password"}
        </Button>
      </form>
      <p>Need help? Feel free to reach out to our support team.</p>
      <p>Best,</p>
      <Copyright />
    </div>
  );
};

export default Forget;
