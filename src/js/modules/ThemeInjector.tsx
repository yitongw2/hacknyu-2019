import * as React from "react";
import { ThemeProvider } from "theming";
import { Theme } from "./types";
import { withRouter } from "react-router";

interface Props {
  location: Location;
  children: any;
}
const theme: Theme = {
  backgroundColor: "#e3f2fd",
  fontColor: "#363731",
  secondBackground: "#416788",
  secondFont: "#fafafa",
  secondFontHover: "#f0f0f0",
  highlightColor: "#db5461",
  highlightColorHover: "#b4505a",
  formBackground: "#fafafa",
};

const ThemeInjector: React.SFC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

// @ts-ignore
export default withRouter(ThemeInjector);
