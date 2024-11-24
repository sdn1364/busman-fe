import { Group } from "@/resources/components/ui";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";

type Story = StoryObj<typeof Group>;

const meta: Meta<typeof Group> = {
  title: "Group",
  component: Group,
  argTypes: {
    justify: {
      name: "Justyify",
      control: "select",
    },
    align: {
      name: "Align",
      control: "select",
    },
    gap: {
      name: "Gap",
      control: "select",
    },
  },
};

export default meta;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Group {...args}>
      <Box />
      <Box />
      <Box />
      <Box />
    </Group>
  ),
};
