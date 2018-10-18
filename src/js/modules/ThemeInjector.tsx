import * as React from "react";
import { ThemeProvider } from "theming";
import { Theme } from "./types";
import { withRouter } from "react-router";

interface Props {
  location: Location;
  children: any;
}
const themes: { [s: string]: Theme } = {
  "/signup": {
    backgroundColor: "#db5461",
    fontColor: "#fafafa",
    secondBackground: "#e3f2fd",
    secondFont: "#4a4b45",
    highlightColor: "#db5461"
  },
  "/": {
    backgroundColor: "#e3f2fd",
    fontColor: "#363731",
    secondBackground: "#686963",
    secondFont: "#fafafa",
    highlightColor: "#db5461"
  },
  "/about": {
    backgroundColor: "#8aa29e",
    fontColor: "#686963",
    secondBackground: "#db5461",
    secondFont: "#fafafa",
    highlightColor: "#db5461"
  }
};

const ThemeInjector: React.SFC<Props> = ({ children, location }) => {
  return (
    <ThemeProvider theme={themes[location.pathname]}>{children}</ThemeProvider>
  );
};

// @ts-ignore
export default withRouter(ThemeInjector);
