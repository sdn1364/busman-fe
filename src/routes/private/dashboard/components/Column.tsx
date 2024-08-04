import useCalendar from "@/hooks/use-calendar";
import { now } from "@/lib/utils";
import dayjs from "dayjs";
import { CSSProperties, forwardRef } from "react";

type Props = {
  day: dayjs.Dayjs;
  style?: CSSProperties;
};

const Column = forwardRef<HTMLDivElement, Props>(
  ({ day, style }: Props, ref) => {
    const { numberOfDays } = useCalendar();

    return (
      <div
        data-grid-date={day.valueOf()}
        ref={ref}
        className="absolute flex h-full w-auto snap-start flex-col border-r"
        style={{
          minWidth: "var(--single-day-width)",
          ...style,
        }}
      >
        <div
          className="header absolute left-0 top-0 flex flex-row items-baseline space-x-1 border-b border-r p-2"
          style={{
            minWidth: `calc(100vw / ${numberOfDays})`,
          }}
        >
          <p
            className={`text-3xl ${now.isSame(day, "day") ? "font-bold text-red-500" : "font-light"}`}
          >
            {day.format("D")}
          </p>
          <p className="text-sm font-light">{day.format("ddd - MMM - YY")}</p>
        </div>
      </div>
    );
  },
);

export default Column;
