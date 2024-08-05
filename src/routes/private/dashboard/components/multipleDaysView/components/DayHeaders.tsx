import { cn, now } from "@/lib/utils";
import useDays from "../useDays";
import dayjs from "dayjs";

const DayHeaders = ({ days }: { days: dayjs.Dayjs[] }) => {
  const { baseScrollPosition } = useDays(days);
  return (
    <div
      className="days-headers sticky left-0 top-0 z-50 w-full"
      style={{ height: "var(--day-header-height)" }}
    >
      {days.map((day, index) => (
        <div
          key={"header-" + day.valueOf()}
          className={cn(
            "absolute flex flex-row items-baseline space-x-1 border-b border-r p-2",
            (day.day() !== 6 || day.day() !== 0) && "bg-background",
            (day.day() === 6 || day.day() === 0) &&
              "bg-slate-200 dark:bg-gray-900",
          )}
          style={{
            transform: `translate(calc(${baseScrollPosition}px + ${index} * var(--single-day-width)) , 0px)`,
            width: `var(--single-day-width)`,
          }}
        >
          <p
            className={`text-3xl ${now.isSame(day, "day") ? "font-bold text-red-500" : "font-light"}`}
          >
            {day.format("D")}
          </p>
          <p className="text-sm font-light">{day.format("ddd")}</p>
        </div>
      ))}
    </div>
  );
};

export default DayHeaders;
