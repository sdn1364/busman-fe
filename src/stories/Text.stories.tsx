import { Text } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  args: {
    children: "Sphinx of black quartz, judge my vow.",
  },
  argTypes: {
    size: {
      name: "Font size",
      control: "select",
    },
    fs: {
      name: "Font style",
      control: "select",
    },
    fw: {
      name: "Font weight",
      control: "select",
    },
    td: {
      name: "Text decoration",
      control: "select",
    },
    ta: {
      name: "Text align",
      control: "select",
    },
    tt: {
      name: "Text transform",
      control: "select",
    },
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
