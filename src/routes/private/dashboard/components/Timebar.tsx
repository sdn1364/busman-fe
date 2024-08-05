import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCalendar from "@/hooks/useCalendar";
import { capitilize, createDaysCalendar } from "@/lib/utils";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

dayjs.extend(weekOfYear);

const Timebar = () => {
  const { calendarView, setCalendarView, numberOfDays } = useCalendar();

  return (
    <div className="timebar flex h-14 w-full flex-row items-center justify-between border-b px-5 py-2">
      <div className="flex flex-row items-baseline gap-1">
        <p className="text-3xl font-[800]">{dayjs().format("MMMM")}</p>
        <p className="text-xl font-bold">{dayjs().year()}</p>
        <p className="light:text-gray-400 ml-1 text-xs dark:text-gray-600">
          Week {dayjs().week()}
        </p>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="xs" variant="secondary" className="space-x-2 text-xs">
              <span>{capitilize(calendarView)}</span>
              <ChevronDown size={15} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setCalendarView("day")}>
              Day
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCalendarView("week")}>
              Week
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCalendarView("month")}>
              Month
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCalendarView("year")}>
              Year
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="xs" variant="secondary" className="text-xs">
          Today
        </Button>
        <Button variant="secondary" size="icon-xs">
          <ChevronLeft size={15} />
        </Button>
        <Button variant="secondary" size="icon-xs">
          <ChevronRight size={15} />
        </Button>
      </div>
    </div>
  );
};

export default Timebar;
