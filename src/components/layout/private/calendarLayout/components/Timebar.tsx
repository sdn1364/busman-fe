import {
  ActionButton,
  Button,
  DropdownMenu,
  Group,
  Text,
} from "@/components/ui";
import { capitilize, now } from "@/lib/utils";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

dayjs.extend(weekOfYear);

const Timebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  const calendarViews = [
    { id: 1, name: "day" },
    { id: 2, name: "week" },
    { id: 3, name: "month" },
  ];

  return (
    <Group align="center" justify="between" className="h-14 border-b px-5 py-2">
      <Group align="center">
        <Text fw="extrabold" className="text-3xl">
          {now.format("MMMM")}
        </Text>
        <Text className="text-xl font-bold">{now.format("YYYY")}</Text>
        {location.pathname === "week" && (
          <Text size="xs" className="ml-1 text-slate-500 dark:text-slate-400">
            Week {now.week()}
          </Text>
        )}
      </Group>
      <Group align="center">
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
                onClick={() => navigate(view.name)}
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
      </Group>
    </Group>
  );
};

export default Timebar;
