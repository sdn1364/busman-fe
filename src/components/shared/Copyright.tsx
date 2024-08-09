import Logo from "./Logo";

const Copyright = () => {
  return (
    <div>
      <p className="text-sm text-slate-500">
        If you believe you received this page in error, please check your email
        for the verification link we sent or contact our support team.
      </p>
      <div className="flex flex-row items-baseline justify-center gap-2">
        <Logo className="fill-slate-500" size={15} />

        <p className="mt-5 text-center text-sm text-slate-500">
          The Elso Creative Team
        </p>
      </div>
    </div>
  );
};

export default Copyright;
