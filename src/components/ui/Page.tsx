import { PropsWithChildren } from "react";

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-dark flex h-full w-full flex-row justify-center p-5 dark:text-white">
      {children}
    </div>
  );
};
