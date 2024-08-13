import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

type Props = {
  day: DayJs;
  style?: CSSProperties;
};

const Day = ({ day, style }: Props) => {
  return (
    <div
      data-date={day.valueOf()}
      className={cn(
        "absolute top-0 flex border-r",
        (day.day() !== 6 || day.day() !== 0) && "bg-background",
        (day.day() === 6 || day.day() === 0) &&
          "bg-slate-100 dark:bg-slate-900",
      )}
      style={{
        ...style,
        width: "var(--single-day-width)",
        height: "var(--single-day-height)",
      }}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0">
          {[...Array.from({ length: 23 })].map((_, i) => {
            const offset = (i + 1) * 12;
            return (
              <div
                key={i}
                className="absolute left-0 flex h-px w-full bg-slate-200 dark:bg-slate-800"
                style={{
                  top: `calc(var(--day-header-height) + var(--tick-height) * ${offset})`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Day;
