import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useMultipleDaysView from "./useMultipleDaysView";
import NumberOfDays from "./components/NumberOfDays";
import AllDays from "./components/AllDays";
import DayHeaders from "./components/DayHeaders";
import Times from "./components/Times";

const MultipleDaysView = () => {
  const {
    tempDays: days,
    containerRef,
    handleOnScroll,
    calendarScrollwidth,
  } = useMultipleDaysView();

  return (
    <div className="scroll-parent relative flex h-full w-full">
      <NumberOfDays />
      <ScrollArea
        ref={containerRef}
        className="relative snap-none"
        style={{
          // width: "var(--all-days-calendar)",
          height: "calc(100vh - 96px)",
        }}
        onScroll={handleOnScroll}
      >
        <div
          className="scroll-container relative block"
          style={{
            width: calendarScrollwidth,
            height: "var(--column-height)",
          }}
        >
          <div
            className="sticky -left-px top-0 z-[60] w-14 border-b border-r bg-background"
            style={{
              height: "var(--day-header-height)",
            }}
          ></div>
          <DayHeaders days={days.current} />
          <Times />
          <AllDays days={days.current} />
        </div>
        <ScrollBar className="hidden" orientation="horizontal" />
        <ScrollBar className="hidden" orientation="vertical" />
      </ScrollArea>
    </div>
  );
};
export default MultipleDaysView;
