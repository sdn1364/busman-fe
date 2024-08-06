import Copyright from "@/components/shared/Copyright";
import { Button } from "@/components/ui/button";
import InputField from "@/components/ui/InputField";

const Forget = () => {
  return (
    <div className="flex w-[400px] flex-col gap-5">
      <h1 className="mb-2 w-full text-center text-3xl font-bold">
        Forgot Your Password?
      </h1>
      <p>
        No worries! Just enter your email address below, and we’ll send you a
        link to reset your password.
      </p>
      <div className="flex flex-col gap-5">
        <InputField label="Email" placeholder="Email" type="email" />
        <Button type="submit">Reset password</Button>
      </div>
      <p>Need help? Feel free to reach out to our support team.</p>
      <p>Best,</p>
      <Copyright />
    </div>
  );
};

export default Forget;
