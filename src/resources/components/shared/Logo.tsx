import useTheme from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const Logo = ({
  size = 40,
  className,
}: {
  className?: string;
  size?: number;
}) => {
  const { theme } = useTheme();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        theme === "light" && "fill-slate-900",
        theme === "dark" && "fill-slate-100",
        className,
      )}
      fill="fill-current"
    >
      <g clipPath="url(#clip0_385_134)">
        <path
          fill="fill-current"
          d="M13.3687 25V24.9976C13.2941 24.9976 13.2195 25 13.1437 25C5.88392 25 0 19.404 0 12.5006C0 5.59725 5.88392 0 13.1437 0C19.6649 0 24.1464 4.51604 25 10.4404C12.5 11.9955 13.4889 20.9265 13.4952 21.5856C13.4952 21.5856 15.6373 15.2427 22.873 15.5049V25.0012H13.3687V25Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_385_134">
          <rect width="25" height="25" fill="fill-current" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;