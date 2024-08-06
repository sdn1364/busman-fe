import Logo from "@/components/shared/Logo";
import { PathConstants } from "@/PathConstants";
import { useLocation } from "react-router-dom";

const Verification = () => {
  const location = useLocation();
  const state = location.state;
  if (!state) {
    return (
      <div className="flex w-[500px] flex-col gap-5">
        <h1 className="mb-2 w-full text-center text-3xl font-bold">Oops!</h1>
        <p>
          It looks like you’ve landed on this page directly. To get started,
          please either sign in or sign up for an account.
        </p>
        <p>If you already have and account:</p>
        <a className="text-green-500 underline" href={PathConstants.LOGIN}>
          Sign In
        </a>
        <p>If you are new here:</p>
        <a className="text-green-500 underline" href={PathConstants.REGISTER}>
          Signup
        </a>
        <p>We’re excited to have you with us!</p>
        <p>
          If you believe you received this page in error, please check your
          email for the verification link we sent or contact our support team.
        </p>
        <p>Cheers, </p>
        <div className="flex flex-row items-baseline justify-center gap-2">
          <Logo className="fill-slate-500" width="15" height="15" />

          <p className="mt-5 text-center text-sm text-slate-500">
            The Elso Creative Team
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-[500px] flex-col gap-5">
      <h1 className="mb-2 w-full text-center text-3xl font-bold">
        Almost There!
      </h1>
      <p>Hi {state}, </p>
      <p>
        Thanks for signing up! We've just sent you an email to verify your
        address. Please check your inbox and click the link to complete your
        registration.
      </p>
      <p>
        If you don't see the email, be sure to checkyour spam or junk folder.
      </p>
      <p>
        Still no luck? You can request a new verification email{" "}
        <a className="text-green-500 underline" href="#">
          here
        </a>
        .
      </p>
      <div>
        <p>We're thrilled to have you with us! </p>
        <p>Cheers, </p>
      </div>
      <div>
        <div className="flex flex-row items-baseline justify-center gap-2">
          <Logo className="fill-slate-500" width="15" height="15" />

          <p className="mt-5 text-center text-sm text-slate-500">
            The Elso Creative Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verification;
