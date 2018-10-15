import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Header from "./Header";
import { connect } from "react-redux";

import { refreshWindowDimensions } from "../coreActions";
import { Link, withRouter } from 'react-router-dom'

const styles = {
  app: {
    backgroundColor: "#f7f7ff",
    color: "black",
    fontFamily: "mr-eaves-xl-modern, sans-serif",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
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
        <Header />
        {this.props.children}
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

export default withRouter(VisibleMainApp);
