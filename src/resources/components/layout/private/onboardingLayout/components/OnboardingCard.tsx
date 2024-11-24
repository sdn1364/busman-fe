import { cn } from "@/lib/utils";
import { Children, PropsWithChildren } from "react";

const CardFooter = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        className,
        "absolute bottom-0 left-0 z-30 flex h-14 w-full border-t",
      )}
    >
      <div
        className={cn(
          "z-30 mx-auto flex w-[1024px] items-center",
          Children.count(children) > 1 && "justify-between",
          Children.count(children) === 1 && "justify-end",
        )}
      >
        {children}
      </div>
    </div>
  );
};
const CardContent = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn(className, "mx-auto w-[1024px] pt-14")}>{children}</div>
  );
};

const Onboarding = ({ children }: PropsWithChildren) => {
  return <div className="relative h-screen w-screen">{children}</div>;
};

Onboarding.Footer = CardFooter;
Onboarding.Card = Onboarding;
Onboarding.Content = CardContent;

export { Onboarding };
