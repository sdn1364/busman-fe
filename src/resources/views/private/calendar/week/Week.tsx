import { useCalendar } from "@/hooks";
import { Empty } from "@/resources/components/shared";
import { ScrollArea, ScrollBar } from "@/resources/components/ui/scroll-area";
import { DndContext } from "@dnd-kit/core";
import { CSSProperties } from "react";
import DayHeaders from "./components/dayHeader/DayHeaders";
import DaysContainer from "./components/DaysContainer";
import Times from "./components/Times";
import VisibleCalendar from "./components/VisibleCalendar";
import useWeek from "./useWeek";

const Week = () => {
  const { numberOfAllDayInTime, containerRef, weekCalendar } = useWeek();

  const { numberOfDays } = useCalendar();

  const styles = {
    "--single-day-width": `calc((100vw - 56px) / ${numberOfDays})`,
    "--tick-height": "4px",
    "--day-header-height": "56px",
    "--single-day-height": "calc(56px + 4px * 12 * 24 )",
    "--full-calendar-width": `calc(${numberOfAllDayInTime} * var(--single-day-width))`,
  } as CSSProperties;

  if (weekCalendar.length < 1) return <Empty text="No calender to show..." />;

  return (
    <DndContext>
      <div style={{ ...styles }}>
        <ScrollArea
          ref={containerRef}
          className="scroll-Container w-full overflow-auto"
          style={{
            height: "calc(100vh - 96px)",
          }}
        >
          <DaysContainer>
            <p className="absolute left-14 top-14 z-50">0</p>
            <div className="sticky -left-px top-0 z-40 block h-14 w-14 border-b border-r bg-background"></div>
            <DayHeaders days={weekCalendar} />
            <Times />
            <VisibleCalendar days={weekCalendar} />
          </DaysContainer>

          <ScrollBar orientation="horizontal" />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </DndContext>
  );
};

export default Week;
