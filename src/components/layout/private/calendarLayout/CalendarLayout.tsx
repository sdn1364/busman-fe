import CalendarProvider from "@/components/context/CalendarContext";
import { Outlet } from "react-router-dom";
import TimeBar from "./components/TimeBar";

const CalendarLayout = () => {
  return (
    <CalendarProvider>
      <div className="overflow flex w-screen flex-col">
        <TimeBar />
        <Outlet />
      </div>
    </CalendarProvider>
  );
};

export default CalendarLayout;
