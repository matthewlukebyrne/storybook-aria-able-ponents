import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
  backgrounds: [
    { name: "Light Theme", value: "#e3e3e3", default: true },
    { name: "Dark Theme", value: "#1b1b1b" }
  ]
});

// To initialize a theme we can pass the context below
addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);