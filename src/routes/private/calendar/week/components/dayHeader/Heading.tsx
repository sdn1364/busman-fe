import { isToday } from "@/lib/dayjs";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

type Props = {
  date: DayJs;
  style: CSSProperties;
};

const Heading = ({ date, style }: Props) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 top-0 z-30 snap-start border-r p-2",
        (date.day() !== 6 || date.day() !== 0) && "bg-background",
        (date.day() === 6 || date.day() === 0) &&
          "bg-slate-100 dark:bg-gray-900",
      )}
      style={{
        width: `var(--single-day-width)`,
        ...style,
      }}
    >
      <div className="flex h-full w-full flex-row items-baseline space-x-1">
        <p
          className={`text-3xl ${isToday(date) ? "font-bold text-red-500" : "text-foreground"}`}
        >
          {date.format("DD")}
        </p>
        <p className="text-sm font-light">{date.format("ddd")}</p>
      </div>
    </div>
  );
};

export default Heading;
