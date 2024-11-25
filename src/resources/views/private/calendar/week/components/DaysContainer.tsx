import { PropsWithChildren } from "react";

const DaysContainer = ({ children }: PropsWithChildren) => {
  return (
    <div
      className="relative block h-full w-full"
      style={{
        width: "var(--full-calendar-width)",
      }}
    >
      {children}
    </div>
  );
};

export default DaysContainer;
