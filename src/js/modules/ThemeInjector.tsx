import * as React from "react"
import {ThemeProvider} from "theming";
import {Theme} from "./types";
import {withRouter} from "react-router";

interface Props {
  location: Location,
  children: any
}
const themes: { [s: string]: Theme } = {
  "/": { backgroundColor: "#db5461", fontColor: "#fafafa" },
  "/signup": { backgroundColor: "#e3f2fd", fontColor: "#686963" },
  "/about": { backgroundColor: "#8aa29e", fontColor: "#686963" }
};

const ThemeInjector: React.SFC<Props> = ({ children, location }) => {
  return (
    <ThemeProvider theme={themes[location.pathname]}>
      {children}
    </ThemeProvider>
  )
};

// @ts-ignore
export default withRouter(ThemeInjector);