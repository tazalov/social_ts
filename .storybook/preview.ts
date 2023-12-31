import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/app/styles/Global.styled";
import { lightTheme, theme } from "../src/app/styles/theme/Theme";
import {
  RouterDecorator
} from "../src/utils/storybook/decorators/RouterDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: theme
      },
      defaultTheme: "dark",
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyle
    }), RouterDecorator]
};

export default preview;
