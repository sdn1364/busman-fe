import {
  ActionButton,
  Button,
  DropdownMenu,
  Group,
  Text,
} from "@/components/ui";
import { getMonthFullName, getWeekOfTheYear, now } from "@/lib/dayjs";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import NumberOfDays from "./NumberOfDays";

const TimeBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const calendarViews = [
    { id: 1, name: "day" },
    { id: 2, name: "week" },
    { id: 3, name: "month" },
  ];

  return (
    <Group align="center" justify="between" className="h-14 border-b px-5 py-2">
      <Group align="center">
        <Text fw="extrabold" className="text-3xl">
          {getMonthFullName(now)}
        </Text>
        <Text className="text-xl font-bold">{now.format("YYYY")}</Text>
        {location.pathname === "week" && (
          <Text size="xs" className="ml-1 text-slate-500 dark:text-slate-400">
            Week {getWeekOfTheYear(now)}
          </Text>
        )}
      </Group>
      <Group align="center">
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <Button size="xs" variant="ghost" className="space-x-2 capitalize">
              <span>{location.pathname.substring(1)}</span>
              <ChevronDown size={15} />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {calendarViews.map((view) => (
              <DropdownMenu.Item
                key={view.id}
                className="capitalize"
                onClick={() => navigate(view.name)}
              >
                {view.name}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu>
        <Button size="xs" variant="ghost">
          Today
        </Button>
        <ActionButton variant="ghost" size="xs">
          <ChevronLeft size={15} />
        </ActionButton>
        <ActionButton variant="ghost" size="xs">
          <ChevronRight size={15} />
        </ActionButton>
        <NumberOfDays />
      </Group>
    </Group>
  );
};

export default TimeBar;
