import { ActionButton, Button, DropdownMenu, Text } from "@/components/ui";
import useCalendar from "@/hooks/useCalendar";
import { capitilize } from "@/lib/utils";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

dayjs.extend(weekOfYear);

const Timebar = () => {
  const { calendarView, setCalendarView, currentDate } = useCalendar();
  const calendarViews = [
    { id: 1, name: "day" },
    { id: 2, name: "week" },
    { id: 3, name: "month" },
  ];

  return (
    <div className="timebar flex h-14 w-full flex-row items-center justify-between border-b px-5 py-2">
      <div className="flex flex-row items-baseline gap-1">
        <Text fw="extrabold" className="text-3xl">
          {currentDate.format("MMMM")}
        </Text>
        <Text className="text-xl font-bold">{currentDate.format("YYYY")}</Text>
        {calendarView === "week" && (
          <Text size="xs" className="ml-1 text-slate-500 dark:text-slate-400">
            Week {currentDate.week()}
          </Text>
        )}
      </div>
      <div className="flex flex-row items-center space-x-2">
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <Button size="xs" variant="neutral" className="space-x-2">
              <span>{capitilize(calendarView)}</span>
              <ChevronDown size={15} />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {calendarViews.map((view) => (
              <DropdownMenu.Item
                key={view.id}
                className="capitalize"
                onClick={() => setCalendarView(view.name)}
              >
                {view.name}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu>
        <Button size="xs" variant="neutral">
          Today
        </Button>
        <ActionButton variant="neutral" size="xs">
          <ChevronLeft size={15} />
        </ActionButton>
        <ActionButton variant="neutral" size="xs">
          <ChevronRight size={15} />
        </ActionButton>
      </div>
    </div>
  );
};

export default Timebar;
