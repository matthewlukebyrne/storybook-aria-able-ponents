import { create } from "@storybook/theming/create";
import logo from "../public/logo.svg";

export default create({
  base: "dark",

  colorPrimary: "#e74e16",
  colorSecondary: "#1b1b1b",

  // UI
  appBg: "#1b1b1b",
  appContentBg: "#1b1b1b",
  appBorderColor: "#e74e16",
  appBorderRadius: 5,

  // Typography
  fontBase: '"Quicksand", monospace',
  fontCode: "monospace",

  // Text colors
  textColor: "#e3e3e3",
  textInverseColor: "#fff",

  // Toolbar default and active colors
  barTextColor: "#fff",
  barSelectedColor: "black",
  barBg: "#e74e16",

  // Form colors
  inputBg: "#e3e3e3",
  inputBorder: "#e3e3e3",
  inputTextColor: "#e3e3e3",
  inputBorderRadius: 4,

  brandTitle: "Aria Able Web Component Library",
  brandUrl: "https://project-aria-able-frontend.web.app/",
  brandImage: logo
});