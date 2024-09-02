import { Empty } from "@/components/shared";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useCalendar } from "@/hooks";
import { DndContext } from "@dnd-kit/core";
import { CSSProperties } from "react";
import DayHeaders from "./components/dayHeader/DayHeaders";
import DaysContainer from "./components/DaysContainer";
import Times from "./components/Times";
import useWeek from "./useWeek";

const Week = () => {
  const { widthOfWholeCalendar, containerRef, weekCalendar } = useWeek();

  const { numberOfDays } = useCalendar();

  const styles = {
    "--single-day-width": `calc((100vw - 56px) / ${numberOfDays})`,
    "--tick-height": "4px",
    "--day-header-height": "56px",
    "--single-day-height": "calc(56px + 4px * 12 * 24 )",
  } as CSSProperties;

  if (weekCalendar.length < 1) return <Empty text="No calender to show..." />;
  console.log(weekCalendar);
  return (
    <DndContext>
      <div style={{ ...styles }}>
        <ScrollArea
          ref={containerRef}
          className="scroll-Container w-full"
          style={{
            height: "calc(100vh - 96px)",
          }}
        >
          <DaysContainer width={widthOfWholeCalendar}>
            <p className="absolute left-14 top-14">0</p>
            <div className="sticky -left-px top-0 z-40 block h-14 w-14 border-b border-r bg-background"></div>
            <DayHeaders days={weekCalendar} />
            <Times />
            {/* <VisibleCalendar days={weekCalendar} /> */}
          </DaysContainer>

          <ScrollBar className="hidden" orientation="horizontal" />
          <ScrollBar className="hidden" orientation="vertical" />
        </ScrollArea>
      </div>
    </DndContext>
  );
};

export default Week;
