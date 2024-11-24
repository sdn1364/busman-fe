import { Button, Stack } from "@/resources/components/ui";
import TimeInput from "@/resources/components/ui/timeInput";
import { Check } from "lucide-react";
import { useDeferredValue, useEffect, useState } from "react";

const HourSelector = ({
  name,
  value,
  onChange,
}: {
  name: string;
  value: { selected: boolean; from: string; to: string };
  onChange: ({
    selected,
    from,
    to,
  }: {
    selected: boolean;
    from: string;
    to: string;
  }) => void;
}) => {
  const [selected, setSelected] = useState(value.selected ?? false);
  const [from, setFrom] = useState(value.from ?? "");
  const [to, setTo] = useState(value.to ?? "");

  const deferredFrom = useDeferredValue(from);
  const deferredTo = useDeferredValue(to);

  useEffect(() => {
    onChange({ selected, from: deferredFrom, to: deferredTo });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deferredFrom, selected, deferredTo]);

  return (
    <Stack align="center" justify="center">
      <Button
        fullWidth
        variant={selected ? "default" : "light"}
        c={selected ? "success" : "default"}
        onClick={() => setSelected(!selected)}
        className="mb-10 capitalize"
        left={selected && <Check size={15} />}
      >
        <span>{name}</span>
      </Button>
      <TimeInput
        onChange={setFrom}
        className="mb-5"
        label="Opening"
        disabled={!selected}
      />
      <TimeInput onChange={setTo} label="Closing" disabled={!selected} />
    </Stack>
  );
};

export default HourSelector;
