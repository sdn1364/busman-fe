import { useCalendar } from "@/hooks";
import { generateCalendarWithDays, numberOfAllDayInTime } from "@/lib/dayjs";
import { useEffect, useMemo, useRef } from "react";

const useWeek = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { numberOfDays } = useCalendar();

  const generateCalendar = useMemo(
    () => generateCalendarWithDays(numberOfDays),
    [numberOfDays],
  );

  const { current: weekCalendar } = useRef<DayJs[]>(generateCalendar);
  const widthOfSingleDay = screen.availWidth / numberOfDays;

  const widthOfwholeCalendar = Math.floor(
    widthOfSingleDay * numberOfAllDayInTime,
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container && weekCalendar.length > 0) {
      container.scrollLeft = weekCalendar[0].position + 56;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { weekCalendar, widthOfwholeCalendar, containerRef };
};

export default useWeek;
