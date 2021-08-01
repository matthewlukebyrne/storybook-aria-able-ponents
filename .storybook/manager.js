// inbuilt customisation of themes
import { addons } from "@storybook/addons";
import myStoryBookTheme from './myStorybookTheme';

addons.setConfig({
  theme: myStoryBookTheme
});