import { Text } from "@/components/ui";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { useEffect, useRef, useState } from "react";
import useWeek from "./useMonth";

dayjs.extend(isToday);

const MonthView = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const weeks = useRef<dayjs.Dayjs[][]>(createMonthCalendar());
  const [oldScrollPosition, setOldScrollPosition] = useState<number>(0);

  const {
    calendarScrollHeight,
    baseDayPosition,
    weekHeight,
    currentScrollPoint,
  } = useWeek(weeks.current);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = currentScrollPoint;
      setOldScrollPosition(currentScrollPoint);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollPosition = Math.floor(container.scrollTop / weekHeight);
      const tempWeek = [...weeks.current];

      if (!oldScrollPosition) {
        return null;
      }

      if (oldScrollPosition - scrollPosition >= 1) {
        const startOfWeek = tempWeek[0][0].subtract(1, "week").startOf("week");
        tempWeek.pop();
        tempWeek.unshift(createWeek(startOfWeek));
      }

      if (scrollPosition - oldScrollPosition >= 1) {
        const startOfWeek = tempWeek[tempWeek.length - 1][0]
          .add(1, "week")
          .startOf("week");

        tempWeek.shift();
        tempWeek.push(createWeek(startOfWeek));
      }

      setOldScrollPosition(scrollPosition);

      if (!currentDate.isSame(tempWeek[7])) {
        setCurrentDate(tempWeek[7][0]);
      }
      weeks.current = tempWeek;
    }
  };

  return (
    <ScrollArea
      ref={containerRef}
      className="relative w-full snap-y"
      style={{
        height: "calc(100vh - 96px)",
      }}
      onScroll={handleScroll}
    >
      <div
        className="relative w-full"
        style={{
          height: calendarScrollHeight,
        }}
      >
        {weeks.current.map((week: dayjs.Dayjs[], index: number) => (
          <div
            key={index}
            className="align-content-end absolute grid w-full snap-start grid-cols-7"
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
                      day.isSame(currentDate, "month") &&
                        "text-slate-600 dark:text-slate-200",
                      day.isToday() &&
                        "text-lg font-bold text-red-400 dark:text-red-500",
                    )}
                  >
                    {day.isSame(day.startOf("month"), "day")
                      ? day.format("MMMM") + "-" + day.format("D")
                      : day.format("D")}
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
function createMonthCalendar(): dayjs.Dayjs[][] {
  throw new Error("Function not implemented.");
}
