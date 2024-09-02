import { useCalendar } from "@/hooks";
import { numberOfAllDayInTime } from "@/lib/dayjs";
import dayjs from "dayjs";
import { useCallback, useLayoutEffect, useMemo, useRef } from "react";

const useWeek = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { numberOfDays } = useCalendar();

  const weekCalendarRef = useRef<DayJs[]>([]);

  const widthOfSingleDay = useMemo(
    () => Math.floor((screen.availWidth - 56) / numberOfDays),
    [numberOfDays],
  );

  const createCalendar = useCallback((numberOfDays: number) => {
    const days: number[] = [];
    const MARGIN = 5;

    const startOfThisWeek = dayjs().startOf("week");

    // there should be a way to position each day
    // also there should be a way to add events
    const addDay = (i: number) => {
      return days.push(startOfThisWeek.add(i, "day").valueOf());
    };

    for (let i = -MARGIN; i < 0; i++) {
      addDay(i);
    }
    for (let i = 0; i < numberOfDays + MARGIN; i++) {
      addDay(i);
    }

    return days;
  }, []);

  useLayoutEffect(() => {
    weekCalendarRef.current = createCalendar(numberOfDays);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfDays]);

  const widthOfWholeCalendar = Math.floor(
    widthOfSingleDay * numberOfAllDayInTime,
  );

  console.log();

  return {
    weekCalendar: weekCalendarRef.current,
    widthOfWholeCalendar,
    containerRef,
  };
};

export default useWeek;
