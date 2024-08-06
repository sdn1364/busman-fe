import { generateYearCalendar } from "@/lib/utils";
import dayjs from "dayjs";
import { useMemo } from "react";
import Month from "./components/Month";
import { ScrollArea } from "@/components/ui/scroll-area";

const MonthView = () => {
  const currentYear = dayjs().year();

  const calendar = useMemo(
    () => generateYearCalendar(currentYear),
    [currentYear],
  );

  return (
    <ScrollArea
      className="relative snap-none"
      style={{
        // width: "var(--all-days-calendar)",
        height: "calc(100vh - 96px)",
      }}
    >
      <div className="mx-auto w-[1024px] py-5">
        <div className="grid grid-cols-3 place-items-center gap-5">
          {calendar.map((month, index) => (
            <Month
              key={index}
              month={month}
              name={dayjs().month(index).format("MMMM")}
            />
          ))}
        </div>
      </div>
    </ScrollArea>
  );
};

export default MonthView;
