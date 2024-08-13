import CalendarProvider from "@/components/context/CalendarContext";
import { Outlet } from "react-router-dom";
import Timebar from "./components/Timebar";

const CalendarLayout = () => {
  return (
    <CalendarProvider>
      <div className="overflow flex w-screen flex-col">
        <Timebar />
        <Outlet />
      </div>
    </CalendarProvider>
  );
};

export default CalendarLayout;
