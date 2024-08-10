import { Text } from "@/components/ui";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn, createMonthCalendar, now } from "@/lib/utils";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { useEffect, useRef } from "react";
import useWeek from "./useWeek";

dayjs.extend(isToday);

const MonthView = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const calendar = useRef<dayjs.Dayjs[][]>(createMonthCalendar());
  const {
    calendarScrollHeight,
    baseDayPosition,
    weekHeight,
    currentScrollPoint,
  } = useWeek(calendar.current);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = currentScrollPoint;
    }
  }, []);

  console.log(baseDayPosition);
  return (
    <ScrollArea
      ref={containerRef}
      className="relative w-full snap-none"
      style={{
        height: "calc(100vh - 96px)",
      }}
    >
      <div
        className="relative w-full"
        style={{
          height: calendarScrollHeight,
        }}
      >
        {calendar.current.map((week: dayjs.Dayjs[], index: number) => (
          <div
            key={index}
            className="align-content-end absolute grid w-full grid-cols-7"
            style={{
              transform: `translate(0px, ${baseDayPosition + weekHeight * index + 1}px)`,
              height: weekHeight,
            }}
          >
            {week.map((day: dayjs.Dayjs, index: number) => {
              return (
                <div
                  key={index}
                  className="relative box-border h-full border"
                  style={{
                    width: screen.availWidth / 7,
                  }}
                >
                  <Text
                    className={cn(
                      "absolute right-4 top-2 font-medium text-slate-300 dark:text-slate-700",
                      day.isSame(now, "month") &&
                        "text-slate-600 dark:text-slate-200",
                      day.isToday() &&
                        "text-lg font-bold text-red-400 dark:text-red-500",
                    )}
                  >
                    {day.format("D")} -{day.format("MMM")}
                  </Text>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default MonthView;
