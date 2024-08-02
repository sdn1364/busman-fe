import { generateYearCalendar } from "@/lib/utils";
import dayjs from "dayjs";
import { useMemo } from "react";
import Month from "./components/Month";

const MonthView = () => {
  const currentYear = dayjs().year();

  const calendar = useMemo(
    () => generateYearCalendar(currentYear),
    [currentYear],
  );

  return (
    <div className="grid grid-cols-3 place-items-center gap-5">
      {calendar.map((month, index) => (
        <Month
          key={index}
          month={month}
          name={dayjs().month(index).format("MMMM")}
        />
      ))}
    </div>
  );
};

export default MonthView;
