import type { Meta, StoryObj } from "@storybook/react";
import { Literal, NamedNode } from "lincd/lib/models";
import Charm from ".";
import { ex3 } from "../../ontologies/ex3";

const meta: Meta<typeof Charm> = {
  title: "Example/Charm",
  component: Charm,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [(story) => <div style={{ color: "white" }}>{story()}</div>],
};

export default meta;
type Story = StoryObj<typeof Charm>;

const charm = NamedNode.getOrCreate("test");

charm.set(ex3.name, new Literal("Graceful Crane Stance") as any);
charm.set(ex3.moteCost, new Literal("2") as any);

export const LoggedOut: Story = {
  args: {
    of: charm as any,
  },
};
