import { Button, Stack } from "@/components/ui";
import TimeInput from "@/components/ui/timeInput";
import { Check } from "lucide-react";
import { useState } from "react";

const HourSelector = ({ name }: { name: string }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Stack align="center">
      <Button
        fullWidth
        variant={selected ? "default" : "light"}
        c={selected ? "success" : "default"}
        onClick={() => setSelected(!selected)}
        className="mb-14 capitalize"
        right={selected && <Check size={15} />}
      >
        <span>{name}</span>
      </Button>
      <TimeInput className="mb-5" label="from" disabled={!selected} />
      <TimeInput label="To" disabled={!selected} />
    </Stack>
  );
};

export default HourSelector;
