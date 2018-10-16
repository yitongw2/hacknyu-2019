import * as React from "react";
import { ReactNode } from "react";
import injectSheet, { Styles } from "react-jss";
// @ts-ignore
import Header from "./Header";

import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import {State} from "../../types";

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
  classes: { [s: string]: string };
  children: ReactNode;
  error: string;
}

const MainApp: React.SFC<Props> = ({ classes, error, children }) => {
  return (
    <div className={classes.app}>
      <Header />
      {error && <h2 className={classes.error}> {error} </h2>}
      {children}
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  error: state.core.error
});

// @ts-ignore
export default compose(
  withRouter,
  injectSheet(styles),
  connect(mapStateToProps)
)(MainApp);
