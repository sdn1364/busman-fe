import { Divider } from "@/resources/components/ui";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Divider>;

const meta: Meta<typeof Divider> = {
  title: "Divder",
  component: Divider,
};

export default meta;

export const Default: Story = {
  args: {
    size: "xs",
    variant: "dashed",
  },
};
