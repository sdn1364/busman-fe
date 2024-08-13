import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useCalendar } from "@/hooks";
import { CSSProperties } from "react";
import DayHeaders from "./components/DayHeaders";
import NumberOfDays from "./components/NumberOfDays";
import Times from "./components/Times";
import VisibleCalendar from "./components/VisibleCalendar";
import useWeek from "./useWeek";

const Week = () => {
  const { weekCalendar, widthOfwholeCalendar, containerRef } = useWeek();
  const { numberOfDays } = useCalendar();

  const styles = {
    "--single-day-width": `calc(100vw / ${numberOfDays})`,
    "--single-day-height": "calc(100vh - 56px)",
    "--tick-height": "4px",
    "--day-header-height": "56px",
  } as CSSProperties;

  return (
    <div className="relative" style={styles}>
      <NumberOfDays />
      <ScrollArea
        ref={containerRef}
        className="relative"
        style={{
          height: "var(--single-day-height)",
        }}
      >
        <div
          className="relative block h-full"
          style={{
            width: widthOfwholeCalendar,
          }}
        >
          <DayHeaders days={weekCalendar} />
          <Times />
          <VisibleCalendar days={weekCalendar} />
        </div>
        <ScrollBar className="hidden" orientation="horizontal" />
        <ScrollBar className="hidden" orientation="vertical" />
      </ScrollArea>
    </div>
  );
};

export default Week;
