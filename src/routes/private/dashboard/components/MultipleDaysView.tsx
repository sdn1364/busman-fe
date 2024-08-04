import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Column from "./Column";
import useCalendar from "@/hooks/useCalendar";
import dayjs from "dayjs";
import { CSSProperties, useEffect, useRef, useState } from "react";

import duration from "dayjs/plugin/duration";
import { createDaysCalendar } from "@/lib/utils";

dayjs.extend(duration);

const MultipleDaysView = () => {
  const { numberOfDays } = useCalendar();
  const containerRef = useRef<HTMLDivElement>(null);

  const [oldScrollPosition, setOldScrollPosition] = useState<number>(0);

  const margin = 5;
  const totalDays = numberOfDays + margin * 2;

  const singleDayWidth = screen.availWidth / numberOfDays;
  const styles = { "--single-day-width": singleDayWidth } as CSSProperties;

  const tempDays = useRef<dayjs.Dayjs[]>(createDaysCalendar(numberOfDays));

  const startDate: dayjs.Dayjs = dayjs("2005-1-1");
  const startOfThisWeek = dayjs().startOf("week");
  const endDate: dayjs.Dayjs = dayjs("2040-12-29");

  const numberOfDaysInTheCalendar: number = dayjs
    .duration(endDate.diff(startDate))
    .asDays();

  const calendarScrollwidth = numberOfDaysInTheCalendar * singleDayWidth - 80;

  const numberOfDaysUpToStartOfWeek = dayjs
    .duration(startOfThisWeek.diff(startDate))
    .asDays();

  const baseDayPosition = dayjs
    .duration(tempDays.current[0].diff(startDate))
    .asDays();
  const baseScrollPosition = Math.floor(baseDayPosition) * singleDayWidth - 80;

  const currentScrollPoint =
    Math.floor(numberOfDaysUpToStartOfWeek) * singleDayWidth - 80;

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = currentScrollPoint;
      setOldScrollPosition(currentScrollPoint);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScrollPoint]);

  const handleOnScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollPosition = Math.floor(container.scrollLeft / singleDayWidth);

      const days = [...tempDays.current];

      if (oldScrollPosition - scrollPosition >= 1) {
        days.pop();
        days.unshift(days[0].subtract(1, "day"));
        setOldScrollPosition(scrollPosition);
      }
      if (scrollPosition - oldScrollPosition >= 1) {
        days.shift();
        days.push(dayjs(days[days.length - 1]).add(1, "day"));
        setOldScrollPosition(scrollPosition);
      }
      tempDays.current = days;
    }
  };

  return (
    <div
      className="flex w-full flex-row"
      style={{
        height: "calc(100vh - 96px)",
        ...styles,
      }}
    >
      <div className="w-20 border-r"></div>
      <ScrollArea
        ref={containerRef}
        className="snap-none"
        style={{
          width: "calc(100vw - 80px)",
        }}
        onScroll={handleOnScroll}
      >
        <div
          className="relative flex flex-row items-start bg-red-100"
          style={{
            width: calendarScrollwidth,
            height: "calc(100vh, 96px)",
          }}
        >
          {tempDays.current.map((day, index) => (
            <Column
              style={{
                transform: `translate(${baseScrollPosition + index * singleDayWidth}px , 0px)`,
              }}
              key={day.valueOf()}
              day={day}
            />
          ))}
        </div>
        <ScrollBar className="hidden" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
export default MultipleDaysView;
