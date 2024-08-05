import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useMultipleDaysView from "./useMultipleDaysView";
import NumberOfDays from "./components/NumberOfDays";
import AllDays from "./components/AllDays";
import DayHeaders from "./components/DayHeaders";

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
        className="relative w-full snap-none"
        style={{
          height: "calc(100vh - 96px)",
        }}
        onScroll={handleOnScroll}
      >
        <div
          className="scroll-container relative"
          style={{
            width: calendarScrollwidth,
            height: "var(--column-height)",
          }}
        >
          <DayHeaders days={days.current} />
          <div
            className="times sticky left-0 z-[60] block h-full w-14 bg-red-100"
            style={{
              height: "var(--column-height)",
            }}
          ></div>
          <AllDays days={days.current} />
        </div>
        <ScrollBar className="hidden" orientation="horizontal" />
        <ScrollBar className="hidden" orientation="vertical" />
      </ScrollArea>
    </div>
  );
};
export default MultipleDaysView;
