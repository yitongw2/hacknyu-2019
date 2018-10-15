import * as React from "react";
import injectSheet, { Styles } from "react-jss";
import Header from "./Header";

import { withRouter } from "react-router-dom";
import {ReactNode} from "react";

const styles: Styles = {
  app: {
    backgroundColor: "#f7f7ff",
    color: "black",
    fontFamily: "mr-eaves-xl-modern, sans-serif",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

interface Props {
    classes: { [s: string]: string },
    children: ReactNode
}

const MainApp: React.SFC<Props> = ({ classes, children }) => {
  return (
    <div className={classes.app}>
      <Header />
      {children}
    </div>
  );
};

// @ts-ignore
export default withRouter(injectSheet(styles)(MainApp));
