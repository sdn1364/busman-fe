import { cn, now } from "@/lib/utils";
import dayjs from "dayjs";
import useDays from "../useDays";

const DayHeaders = ({ days }: { days: dayjs.Dayjs[] }) => {
  const { baseScrollPosition, singleDayWidth } = useDays(days);
  return (
    <div
      className="days-headers sticky left-0 top-0 z-40"
      style={{
        marginTop: "calc(-1 * var(--day-header-height))",
        height: "var(--day-header-height)",
      }}
    >
      <div className="relative block h-full w-full">
        {days.map((day, index) => {
          const transform = baseScrollPosition! + index * singleDayWidth;

          return (
            <div
              key={"header-" + day.valueOf()}
              className={cn(
                "absolute bottom-0 top-0 snap-start border-b border-r p-2",
                (day.day() !== 6 || day.day() !== 0) && "bg-background",
                (day.day() === 6 || day.day() === 0) &&
                  "bg-slate-100 dark:bg-gray-900",
              )}
              style={{
                transform: `translate(${transform}px , 0px)`,
                width: `var(--single-day-width)`,
              }}
            >
              <div className="flex h-full w-full flex-row items-baseline space-x-1">
                <p
                  className={`text-3xl ${now.isSame(day, "day") ? "font-bold text-red-500" : "font-light"}`}
                >
                  {day.format("D")}-{day.format("MMM")}
                </p>
                <p className="text-sm font-light">{day.format("ddd")}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DayHeaders;
