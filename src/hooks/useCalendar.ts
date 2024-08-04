import {
  CalendarActionContext,
  CalendarContext,
} from "@/components/context/CalendarContext";
import { useContext } from "react";

const useCalendar = () => {
  const calendarState = useContext(CalendarContext);
  const calendarAction = useContext(CalendarActionContext);
  return { ...calendarState, ...calendarAction };
};

export default useCalendar;
