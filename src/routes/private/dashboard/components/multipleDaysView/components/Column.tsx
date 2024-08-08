import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { CSSProperties, forwardRef } from "react";

type Props = {
  day: dayjs.Dayjs;
  style?: CSSProperties;
};

const Column = forwardRef<HTMLDivElement, Props>(
  ({ day, style }: Props, ref) => {
    return (
      <div
        data-grid-date={day.valueOf()}
        ref={ref}
        className={cn(
          "absolute top-0 flex snap-start flex-col border-r",
          (day.day() !== 6 || day.day() !== 0) && "bg-background",
          (day.day() === 6 || day.day() === 0) &&
            "bg-slate-100 dark:bg-slate-900",
        )}
        style={{
          width: "var(--single-day-width)",
          height: "var(--column-height)",
          ...style,
        }}
      >
        <div
          className="relative w-full"
          style={{
            height: "var(--column-height)",
          }}
        >
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
  },
);

export default Column;
