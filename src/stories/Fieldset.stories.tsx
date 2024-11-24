import { Fieldset } from "@/resources/components/ui";
import { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Fieldset>;

const meta: Meta<typeof Fieldset> = {
  title: "Fieldset",
  component: Fieldset,
  args: {
    label: "Fieldset label",
    children: "content",
  },
};
export default meta;

export const Default: Story = {
  args: {},
};

export const DefaultFilled: Story = {
  args: {},
};
export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
