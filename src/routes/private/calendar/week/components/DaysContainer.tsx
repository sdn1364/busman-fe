import { PropsWithChildren } from "react";

const DaysContainer = ({
  children,
  width,
}: PropsWithChildren<{ width: number }>) => {
  return (
    <div
      className="relative block h-full w-full"
      style={{
        width: width,
      }}
    >
      {children}
    </div>
  );
};

export default DaysContainer;
