import useCalendar from "@/hooks/useCalendar";
import dayjs from "dayjs";
import { useLayoutEffect, useState } from "react";

const useDays = (days?: dayjs.Dayjs[]) => {
  const { numberOfDays } = useCalendar();

  const [singleDayWidth, setSingleDayWidth] = useState<number>(
    (window.innerWidth - 56) / numberOfDays,
  );

  useLayoutEffect(() => {
    function updateSize() {
      setSingleDayWidth((window.innerWidth - 56) / numberOfDays);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [numberOfDays]);

  if (!days) {
    return { singleDayWidth };
  }

  const startDate: dayjs.Dayjs = dayjs("2005-1-1");

  const startOfThisWeek = dayjs().startOf("week");
  const endDate: dayjs.Dayjs = dayjs("2040-12-29");

  const baseDayPosition = dayjs.duration(days[0].diff(startDate)).asDays();

  const numberOfDaysInTheCalendar: number = dayjs
    .duration(endDate.diff(startDate))
    .asDays();

  const numberOfDaysUpToStartOfWeek = dayjs
    .duration(startOfThisWeek.diff(startDate))
    .asDays();

  const currentScrollPoint = Math.floor(
    numberOfDaysUpToStartOfWeek * singleDayWidth!,
  );

  const baseScrollPosition = Math.floor(baseDayPosition * singleDayWidth!) + 56;
  return {
    baseScrollPosition,
    currentScrollPoint,
    singleDayWidth,
    numberOfDaysInTheCalendar,
  };
};

export default useDays;
