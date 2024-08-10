import CalendarProvider from "@/components/context/CalendarContext";
import { Stack } from "@/components/ui";
import { Outlet } from "react-router-dom";
import Timebar from "./components/Timebar";

const CalendarLayout = () => {
  return (
    <CalendarProvider>
      <Stack fullWidth>
        <Timebar />
        <Outlet />
      </Stack>
    </CalendarProvider>
  );
};

export default CalendarLayout;
