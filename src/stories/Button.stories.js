import { Button } from "../ebac-ds/ebac-ds";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "EBAC-DS/Button",
  component: Button,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    label: "Button",
    isDisabled: false,
    mh: 0,
    mv: 0,
    ml: 0,
    mr: 0,
    mt: 0,
    mb: 0,
    p: 0,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: "text" },
    mh: { control: "number" },
    mv: { control: "number" },
    ml: { control: "number" },
    mr: { control: "number" },
    mt: { control: "number" },
    mb: { control: "number" },
    p: { control: "number" },
    isDisabled: { control: "boolean" },
  },
  args: {
    label: "Button",
    mh: 0,
    mv: 0,
    ml: 0,
    mr: 0,
    mt: 0,
    mb: 0,
    p: 0,
    isDisabled: false,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: "Button",
  },
};
