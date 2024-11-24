import useCalendar from "@/hooks/useCalendar";
import { ActionButton, Group, Text } from "@/resources/components/ui";
import { Minus, Plus } from "lucide-react";

const NumberOfDays = () => {
  const { increaseNumberOfDays, decreaseNumberOfDays, numberOfDays } =
    useCalendar();
  return (
    <Group className="h-7 w-auto" align="center">
      <ActionButton size="xs" variant="ghost" onClick={decreaseNumberOfDays}>
        <Minus size={15} />
      </ActionButton>
      <Text size="sm" className="flex h-7 w-7 items-center justify-center">
        {numberOfDays}
      </Text>
      <ActionButton size="xs" variant="ghost" onClick={increaseNumberOfDays}>
        <Plus size={15} />
      </ActionButton>
    </Group>
  );
};

export default NumberOfDays;
