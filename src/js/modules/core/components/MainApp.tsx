import * as React from "react";
import { ReactNode } from "react";
import injectSheet, { Styles } from "react-jss";
import { withRouter } from "react-router-dom";
import {compose } from "redux";
import { connect } from "react-redux";
import {State, Theme} from "../../types";
// @ts-ignore
import { addUser } from "../coreActions";
import Header from "./Header";
import {User} from "firebase";
import UserInfo from "./UserInfo";

const styles = (theme: Theme): Styles => ({
  app: {
    backgroundColor: theme.backgroundColor,
    color: theme.fontColor,
    transition: "background-color 2s, font-color 2s",
    fontFamily: "mr-eaves-xl-modern, sans-serif",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

interface Props {
  classes: { [s: string]: string };
  children: ReactNode;
  error: string;
  location: Location;
  user: User;
  addUser: (u: User) => any;
}

class MainApp extends React.Component<Props> {
  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user) {
      this.props.addUser(JSON.parse(user));
    }
  }
  render() {
    let {classes, error, children, user} = this.props;
    return (
      <div className={classes.app}>
        <Header/>
        {user && <UserInfo user={user}/>}
        {error && <h2 className={classes.error}> {error} </h2>}
        {children}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  error: state.core.error,
  user: state.core.user
});

const mapDispatchToProps = (dispatch: any) => ({
  addUser: (user: User) => dispatch(addUser(user))
});

// @ts-ignore
export default compose(
  withRouter,
  injectSheet(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(MainApp);
