import { useCalendar } from "@/hooks";
import { getDiffFromStart, numberOfAllDayInTime } from "@/lib/dayjs";
import dayjs from "dayjs";
import { useLayoutEffect, useRef, useState } from "react";

const useWeek = () => {
  const days: { value: number; position: number }[] = [];
  const MARGIN = 5;

  const startOfThisWeek = dayjs().startOf("week");

  let basePosition = Math.floor(getDiffFromStart(startOfThisWeek) - MARGIN);

  const containerRef = useRef<HTMLDivElement>(null);

  const { numberOfDays } = useCalendar();

  const [oldPosition] = useState(basePosition);

  const createCalendar = (numberOfDays: number) => {
    for (let i = -MARGIN; i < numberOfDays + MARGIN; i++) {
      days.push({
        value: startOfThisWeek.add(i, "day").valueOf(),
        position: basePosition,
      });

      basePosition++;
    }

    return days;
  };

  const weekCalendarRef = useRef<DayJs[]>(createCalendar(numberOfDays));

  const SINGLE_DAY_WIDTH = (screen.availWidth - 56) / numberOfDays;

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft =
        (oldPosition + MARGIN) * SINGLE_DAY_WIDTH - 56;
    }
  }, [oldPosition, numberOfDays, SINGLE_DAY_WIDTH]);

  return {
    weekCalendar: weekCalendarRef.current,
    numberOfAllDayInTime,
    containerRef,
  };
};

export default useWeek;
