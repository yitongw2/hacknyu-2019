import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Header from "./Header";
import Block from "./Block";
import FillerBox from "./FillerBlock"
import { connect } from "react-redux";

import { refreshWindowDimensions } from "../coreActions";

const styles = {
  app: {
    backgroundColor: "#f7f7ff",
    color: "white",
    fontFamily: "mr-eaves-xl-modern, sans-serif",
    height: "100%",
    width: "100%",
    gridColumnGap: "50px",
    gridRowGap: "10px",
    gridTemplateColumns: "auto auto auto auto",
    gridTemplateRows: "auto auto auto auto",
    gridTemplateAreas: `
      "blank6 blank3 header header header blank2 blank7"
      "blank6 blank3 header header header blank2 blank7"
      "blank6 blank5 blank5 blank1 sign-up sign-up blank7"
      "blank6 learn  learn  blank1 sign-up sign-up blank7"
      "blank6 learn  learn  blank4 blank4  blank4 blank7"
    `,
    display: "grid",
  },
  learnMore: {
    fontsize: "2em"
  },
  signUp: {
    display: "flex",
    padding: "30px",
    fontSize: "2em"
  }
};

class MainApp extends PureComponent {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  onResizeWindow = () => {
    this.props.refreshWindowDimensions();
  };
  componentDidMount() {
    window.addEventListener("resize", this.onResizeWindow);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeWindow);
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <Block name="header" color="#57068c">
          <Header />
        </Block>
        <Block name="sign-up" color="#33658a">
          <h1 className={classes.signUp}> Sign Up! </h1>
        </Block>
        <Block name="learn" color="#fe5f55">
          <h1 className={classes.learnMore}> Learn More </h1>
        </Block>
        <FillerBox index={1} />
        <FillerBox index={2} />
        <FillerBox index={3} />
        <FillerBox index={4} />
        <FillerBox index={5} />
        <FillerBox index={6} />
        <FillerBox index={7} />
      </div>
    );
  }
}

const VisibleMainApp = connect(
  state => ({
    viewportWidth: state.core.viewportWidth,
    viewportHeight: state.core.viewportHeight
  }),
  dispatch => ({
    refreshWindowDimensions: () => {
      dispatch(refreshWindowDimensions());
    }
  })
)(injectSheet(styles)(MainApp));

export default VisibleMainApp;
