import { Button } from "@/components/ui";
import { Meta, StoryObj } from "@storybook/react";

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
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: "default",
    c: "secondary",
  },
};

export const Info: Story = {
  args: {
    variant: "default",
    c: "info",
  },
};
export const Warning: Story = {
  args: {
    variant: "default",
    c: "warning",
  },
};

export const Destructive: Story = {
  args: {
    variant: "default",
    c: "destructive",
  },
};

export const Success: Story = {
  args: {
    variant: "default",
    c: "success",
  },
};

export const Neutral: Story = {
  args: {
    variant: "default",
    c: "neutral",
  },
};
export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};
export const OutlinePrimary: Story = {
  args: {
    variant: "outline",
    c: "primary",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
