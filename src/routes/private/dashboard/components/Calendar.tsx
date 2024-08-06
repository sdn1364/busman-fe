import useCalendar from "@/hooks/useCalendar";
import MultipleDaysView from "./multipleDaysView/MultipleDaysView";
import MonthView from "./monthView/MonthView";
import { CSSProperties } from "react";
import useDays from "./multipleDaysView/useDays";

const Calendar = () => {
  const { calendarView } = useCalendar();
  const { singleDayWidth } = useDays();

  const styles = {
    "--all-days-calendar": screen.availWidth - 56,
    "--single-day-width": `${singleDayWidth}px`,
    "--tick-height": "4px",
    "--day-header-height": `54px`,
    "--column-height": `${4 * 12 * 24 + 56}px`,
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
