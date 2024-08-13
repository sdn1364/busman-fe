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
    variant: "secondary",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
  },
};
export const Warning: Story = {
  args: {
    variant: "warning",
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

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
