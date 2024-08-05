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
          "absolute top-0 flex w-auto snap-start flex-col border-r",
          (day.day() !== 6 || day.day() !== 0) && "bg-background",
          (day.day() === 6 || day.day() === 0) &&
            "bg-slate-200 dark:bg-gray-900",
        )}
        style={{
          width: "var(--single-day-width)",
          ...style,
        }}
      >
        <div
          className="relative w-full"
          style={{
            paddingTop: "var(--day-header-height)",
            height: "var(--column-height)",
          }}
        >
          <div className="absolute inset-0">
            {[...Array.from({ length: 23 })].map((_, i) => {
              const offset = (i + 1) * 12;
              return (
                <div
                  key={i}
                  className="absolute left-0 flex h-px bg-slate-200 dark:bg-slate-800"
                  style={{
                    top: `calc(var(--tick-height) * ${offset})`,
                    width: "var(--single-day-width)",
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
