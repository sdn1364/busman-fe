import useCalendar from "@/hooks/useCalendar";
import MultipleDaysView from "./multipleDaysView/MultipleDaysView";
import MonthView from "./monthView/MonthView";
import { CSSProperties } from "react";

const Calendar = () => {
  const { calendarView, numberOfDays } = useCalendar();

  const singleDayWidth = screen.availWidth / numberOfDays;

  const styles = {
    "--all-days-calendar": screen.availWidth - 80 - 200,
    "--single-day-width": `${singleDayWidth}px`,
    "--tick-height": "4px",
    "--day-header-height": `54px`,
    "--column-height": `${4 * 12 * 24}px`,
  } as CSSProperties;
  return (
    <div
      className="w-screen overflow-hidden"
      style={{
        height: "calc(100vh - 96px)",
        ...styles,
      }}
    >
      {calendarView === "week" && <MultipleDaysView />}
      {calendarView === "year" && <MonthView />}
    </div>
  );
};

export default Calendar;
