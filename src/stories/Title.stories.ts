import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "@/resources/components/ui";

type Story = StoryObj<typeof Title>;

const meta: Meta<typeof Title> = {
  title: "Title",
  component: Title,
};

export default meta;

export const H1: Story = {
  args: {
    order: 1,
    children: "H1 heading",
  },
};

export const H2: Story = {
  args: {
    order: 2,
    children: "H2 heading",
  },
};

export const H3: Story = {
  args: {
    order: 3,
    children: "H3 heading",
  },
};
export const H4: Story = {
  args: {
    order: 4,
    children: "H4 heading",
  },
};
export const H5: Story = {
  args: {
    order: 5,
    children: "H5 heading",
  },
};
export const H6: Story = {
  args: {
    order: 6,
    children: "H6 heading",
  },
};
