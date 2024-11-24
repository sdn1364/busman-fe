import { Stack } from "@/resources/components/ui";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";
type Story = StoryObj<typeof Stack>;

const meta: Meta<typeof Stack> = {
  title: "Stack",
  component: Stack,
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
    <Stack {...args}>
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
  ),
};
