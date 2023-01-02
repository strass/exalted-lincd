import type { Meta, StoryObj } from "@storybook/react";
import { Literal, NamedNode } from "lincd/lib/models";
import Character from ".";
import { ex3 } from "../../ontologies/ex3";

const meta: Meta<typeof Character> = {
  title: "Example/Character",
  component: Character,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [(story) => <div style={{ color: "white" }}>{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof Character>;

const character = NamedNode.getOrCreate("test");

character.set(ex3.name, new Literal("test") as any);

export const LoggedOut: Story = {
  args: {
    of: character as any,
  },
};
