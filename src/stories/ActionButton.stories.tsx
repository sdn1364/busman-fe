import { ActionButton } from "@/resources/components/ui";
import { Meta, StoryObj } from "@storybook/react";
import { Plus } from "lucide-react";

type Story = StoryObj<typeof ActionButton>;

const meta: Meta<typeof ActionButton> = {
  title: "Action Button",
  component: ActionButton,
  args: {
    children: <Plus size={15} />,
  },
};

export default meta;

export const Default: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
