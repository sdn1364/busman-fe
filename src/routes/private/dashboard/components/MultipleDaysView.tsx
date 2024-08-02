import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Column from "./Column";
import useCalendar from "@/hooks/use-calendar";
import { useCallback, useRef, useState } from "react";
import dayjs from "dayjs";
import { createDaysCalendar } from "@/lib/utils";
import { FixedSizeList as List } from "react-window";
import { CSSProperties } from "react";
import { useEffect } from "react";

const MultipleDaysView = () => {
  const { numberOfDays } = useCalendar();
  const margin: number = 5;
  const totalDays: number = numberOfDays + margin * 2;

  const [days, setDays] = useState<dayjs.Dayjs[]>(
    createDaysCalendar(numberOfDays),
  );

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Set initial scroll position to start of the current week
      const today = dayjs();
      const startOfWeek = today.startOf("week");
      const index = days.findIndex((day) => day.isSame(startOfWeek, "day"));
      if (index >= 0) {
        const scrollPosition = (index * container.clientWidth) / numberOfDays; // Adjust for the 5 days before the week
        container.scrollLeft = scrollPosition;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfDays]);

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;

      if (scrollLeft + clientWidth >= scrollWidth && days.length < 30) {
        // Add more days to the end
        setDays((prevDays) => [
          ...prevDays,
          ...Array.from({ length: numberOfDays }).map((_, i) =>
            dayjs()
              .startOf("week")
              .add(prevDays.length + i, "day"),
          ),
        ]);
      } else if (scrollLeft === 0 && days.length > totalDays) {
        // Add more days to the start
        setDays((prevDays) => [
          ...Array.from({ length: numberOfDays }).map((_, i) =>
            dayjs()
              .startOf("week")
              .subtract(7 - i, "day"),
          ),
          ...prevDays,
        ]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  const Col = ({ index, style }: { index: number; style: CSSProperties }) => (
    <Column style={style} day={days[index]} />
  );

  return (
    <div
      className="flex w-full flex-row"
      style={{
        height: "calc(100vh - 96px)",
      }}
    >
      <div className="w-20 border-r"></div>
      <ScrollArea
        className="snap-none"
        ref={containerRef}
        style={{
          width: "calc(100vw - 80px)",
        }}
        onScroll={handleScroll}
      >
        <List
          height={"calc(100vh - 96px)"} // Fixed height of the container
          itemCount={days.length}
          itemSize={screen.availWidth / numberOfDays} // Width of each item
          width={screen.availWidth - 80} // Width of the container
          layout="horizontal" // Set layout to horizontal
        >
          {Col}
        </List>
        <ScrollBar className="hidden" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
export default MultipleDaysView;
