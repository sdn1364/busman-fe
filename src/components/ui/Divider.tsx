import { cn } from "@/lib/utils";

const Divider = ({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative py-1", className)}>
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
};

export { Divider };
