import { Anchor } from "@/components/ui";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Anchor>;

const meta: Meta<typeof Anchor> = {
  title: "Anchor",
  component: Anchor,
  args: {
    children: "Test link",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
