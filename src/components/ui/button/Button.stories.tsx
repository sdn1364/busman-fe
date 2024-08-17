import { Button } from "@/components/ui";
import { Meta, StoryObj } from "@storybook/react";
import { Check } from "lucide-react";

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export default meta;

export const Default: Story = {
  args: {
    asChild: false,
    loading: false,
    variant: "light",
    c: "default",
  },
};

export const RightSection: Story = {
  args: {
    right: <Check size={15} />,
  },
};
export const LeftSection: Story = {
  args: {
    left: <Check size={15} />,
  },
};
