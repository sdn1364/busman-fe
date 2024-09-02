import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode } from "react";
import { ActionButton } from "./actionButton";
import { Stack } from "./stack";
import { Text } from "./text";

type NumberRotator = {
  children: ReactNode;
  up?: () => void;
  down?: () => void;
  disabled?: boolean;
  name?: string;
};

const NumberRotator = ({
  children,
  up,
  down,
  name,
  disabled = false,
}: NumberRotator) => {
  return (
    <Stack
      gap={0}
      className={cn(
        "w-full rounded-md border",
        disabled && "cursor-not-allowed",
        !disabled && "cursor-row-resize",
      )}
      align="center"
      onWheel={(e) => !disabled && (e.deltaY > 0 ? down!() : up!())}
    >
      <input type="hidden" name={name} />
      <ActionButton
        size="xs"
        variant="outline"
        onClick={up}
        disabled={disabled}
        className="border-0"
      >
        <ChevronUp size={15} />
      </ActionButton>
      <Text
        className={cn(
          "flex h-7 w-7 items-center justify-center",
          disabled && "opacity-50",
        )}
        ta="center"
      >
        {children}
      </Text>
      <ActionButton
        onClick={down}
        size="xs"
        variant="outline"
        disabled={disabled}
        className="border-0"
      >
        <ChevronDown size={15} />
      </ActionButton>
    </Stack>
  );
};

export default NumberRotator;
