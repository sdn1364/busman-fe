import useCalendar from "@/hooks/useCalendar";
import { createDaysCalendar } from "@/lib/utils";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useRef, useState } from "react";
import useDays from "./useDays";

dayjs.extend(duration);

const useMultipleDaysView = () => {
  const { numberOfDays } = useCalendar();
  const containerRef = useRef<HTMLDivElement>(null);
  const [oldScrollPosition, setOldScrollPosition] = useState<number>(0);

  const tempDays = useRef<dayjs.Dayjs[]>(createDaysCalendar(numberOfDays));

  const { currentScrollPoint, singleDayWidth, numberOfDaysInTheCalendar } =
    useDays(tempDays.current);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = currentScrollPoint!;
      setOldScrollPosition(currentScrollPoint! / singleDayWidth);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfDays]);

  useEffect(() => {
    tempDays.current = createDaysCalendar(numberOfDays);
  }, [numberOfDays]);

  const calendarScrollwidth = numberOfDaysInTheCalendar! * singleDayWidth;

  const handleOnScroll = () => {
    const container = containerRef.current;

    if (!container) return null;

    const scrollPosition = Math.floor(container.scrollLeft / singleDayWidth);
    const days = [...tempDays.current];

    if (oldScrollPosition === null) {
      setOldScrollPosition(scrollPosition);
      return;
    }

    const scrollDiff = scrollPosition - oldScrollPosition;

    if (scrollDiff !== 0) {
      if (scrollDiff > 0) {
        // Scrolling to the right
        for (let i = 0; i < scrollDiff; i++) {
          days.shift();
          days.push(dayjs(days[days.length - 1]).add(1, "day"));
        }
      } else if (scrollDiff < 0) {
        // Scrolling to the left
        for (let i = 0; i < Math.abs(scrollDiff); i++) {
          days.pop();
          days.unshift(days[0].subtract(1, "day"));
        }
      }
    }

    setOldScrollPosition(scrollPosition);

    tempDays.current = days;
  };

  return {
    containerRef,
    handleOnScroll,
    tempDays,
    calendarScrollwidth,
  };
};

export default useMultipleDaysView;
