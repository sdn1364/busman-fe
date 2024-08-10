import { now } from "@/lib/utils";
import dayjs from "dayjs";

const useWeek = (weeks: dayjs.Dayjs[][]) => {
  const startDate: dayjs.Dayjs = dayjs("2005-1-1");
  const endDate: dayjs.Dayjs = dayjs("2040-12-29");

  const weekHeight = (screen.availHeight - 85) / 7;
  const startOfThisMonth = now.startOf("month").startOf("week");

  const numberOfWeekInTheCalendar: number = dayjs
    .duration(endDate.diff(startDate))
    .asWeeks();

  const baseDayPosition =
    dayjs.duration(weeks[0][0].diff(startDate)).asWeeks() * weekHeight;

  const calendarScrollHeight = numberOfWeekInTheCalendar * weekHeight;

  const numberOfWeeksUpToStartOfWeek = dayjs
    .duration(startOfThisMonth.diff(startDate))
    .asWeeks();

  const currentScrollPoint = Math.floor(
    numberOfWeeksUpToStartOfWeek * weekHeight,
  );

  return {
    numberOfWeekInTheCalendar,
    baseDayPosition,
    weekHeight,
    calendarScrollHeight,
    currentScrollPoint,
  };
};

export default useWeek;
