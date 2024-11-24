import { cn } from "@/lib/utils";
import { Text, Title } from "@/resources/components/ui";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { cva, VariantProps } from "class-variance-authority";
import { CSSProperties, ReactNode, useId } from "react";

const eventVariant = cva(
  "absolute top-[200px] z-[100] ml-1 h-96 w-[95%] rounded-sm border-l-[6px] p-2",
  {
    variants: {
      variant: {
        default: "",
      },
      color: {
        red: [
          "dark:border-red-500 dark:bg-red-950 dark:hover:bg-red-900",
          "border-red-400 bg-red-200 hover:bg-red-300",
        ],
      },
    },
    defaultVariants: {
      color: "red",
    },
  },
);

interface EventProps extends VariantProps<typeof eventVariant> {
  className?: string;
  children?: ReactNode;
  title: string;
  style?: CSSProperties;
  time?: string;
}

const Event = ({
  className,
  variant,
  children,
  title,
  style,
  time,
  color,
}: EventProps) => {
  const id = useId();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable_" + id,
  });

  const styles = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  return (
    <div
      className={cn(className, eventVariant({ variant, color }))}
      style={{
        ...style,
        ...styles,
      }}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <Title order={5}>{title}</Title>
      <Text size="sm">{time}</Text>
      {children}
    </div>
  );
};

export default Event;
