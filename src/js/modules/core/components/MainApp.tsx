import * as React from "react";
import { ReactNode } from "react";
import injectSheet, { Styles } from "react-jss";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import {State} from "../../types";
import Header from "./Header";

interface Theme {
  background: string,
  fontColor: string
}

const themes: { [s: string]: Theme } = {
  '/': { background: "#db5461", fontColor: "#fafafa" },
  '/signup': { background: "#e3f2fd", fontColor: "#686963"},
  '/about': { background: "#8aa29e", fontColor: "#686963"}
};


const styles: Styles = {
  app: {
    // @ts-ignore
    backgroundColor: props => themes[props.location.pathname]["background"],
    // @ts-ignore
    color:  props => themes[props.location.pathname]["fontColor"],
    transition: "background-color 2s, font-color 2s",
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
  location: Location
}

const MainApp: React.SFC<Props> = ({ classes, error, children, location }) => {
  console.log(themes[location.pathname].background);
  return (
    <div className={classes.app}>
      { location.pathname !== '/' && <Header />}
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
