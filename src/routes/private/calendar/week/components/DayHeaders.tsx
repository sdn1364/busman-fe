import {
  getDayNumber,
  getDayShortName,
  getMonthShortName,
  isToday,
} from "@/lib/dayjs";
import { cn } from "@/lib/utils";

const DayHeaders = ({ days }: { days: DayType[] }) => {
  return (
    <div
      className="left-0 top-0 z-40 w-full"
      style={{
        height: "var(--day-header-height)",
      }}
    >
      <div className="relative h-full w-full">
        {days.map(({ day, position }: DayType) => {
          return (
            <div
              key={"header-" + day.valueOf()}
              className={cn(
                "absolute bottom-0 top-0 z-30 snap-start border-b border-r p-2",
                (day.day() !== 6 || day.day() !== 0) && "bg-background",
                (day.day() === 6 || day.day() === 0) &&
                  "bg-slate-100 dark:bg-gray-900",
              )}
              style={{
                width: `var(--single-day-width)`,
                transform: `translate(${position}px, 0px)`,
              }}
            >
              <div className="flex h-full w-full flex-row items-baseline space-x-1">
                <p
                  className={`text-3xl ${isToday(day) ? "font-bold text-red-500" : "font-light"}`}
                >
                  {getDayNumber(day)}-{getMonthShortName(day)}
                </p>
                <p className="text-sm font-light">{getDayShortName(day)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DayHeaders;
