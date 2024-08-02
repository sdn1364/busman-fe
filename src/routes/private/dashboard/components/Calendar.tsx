import useCalendar from "@/hooks/use-calendar";
import MultipleDaysView from "./MultipleDaysView";
import MonthView from "./monthView/MonthView";
import { Button } from "@/components/ui/button";
import { Diff, Minus, Plus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Calendar = () => {
  const { calendarView, setNumberOfDays, numberOfDays } = useCalendar();

  return (
    <div
      className="relative flex w-screen overflow-hidden"
      style={{
        height: "calc(100vh - 96px)",
      }}
    >
      <div className="absolute right-2 top-1 z-30">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon-xs" variant="secondary">
              <Diff size={10} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex w-auto flex-row space-x-1 p-1">
            <Button
              size="icon-xs"
              variant="secondary"
              onClick={() => setNumberOfDays((val) => (val > 1 ? val - 1 : 1))}
            >
              <Minus size={10} />
            </Button>
            <input
              className="w-10 text-center"
              type="text"
              value={numberOfDays}
            />
            <Button
              size="icon-xs"
              variant="secondary"
              onClick={() =>
                setNumberOfDays((val) => (val < 31 ? val + 1 : 31))
              }
            >
              <Plus size={10} />
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      {calendarView === "week" && <MultipleDaysView />}
      {calendarView === "year" && <MonthView />}
    </div>
  );
};

export default Calendar;
