import type { Meta, StoryObj } from "@storybook/react";
import Button from "./index";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    text: "Button",
    href: "/",
  },
  render: (args) => (
    <div className="flex justify-center items-center h-screen">
      <Button {...args} />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
