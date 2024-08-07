import Copyright from "@/components/shared/Copyright";
import { Button } from "@/components/ui/button";
import InputField from "@/components/ui/InputField";
import { useLocation } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();

  return (
    <div className="flex w-[400px] flex-col gap-5">
      <h1 className="mb-2 w-full text-center text-3xl font-bold">
        Reset Your Password
      </h1>

      <div className="flex flex-col gap-5">
        <p>
          <strong>Email:</strong> {location.state}
        </p>
        <InputField label="Password" placeholder="Password" type="password" />
        <Button type="submit">Reset password</Button>
      </div>
      <p>Need help? Feel free to reach out to our support team.</p>
      <p>Best,</p>
      <Copyright />
    </div>
  );
};

export default ResetPassword;
