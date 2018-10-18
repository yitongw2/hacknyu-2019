import * as React from "react";
import { connect } from "react-redux";
import injectSheet, { Styles } from "react-jss";
import { Link } from "react-router-dom";
// @ts-ignore
import { login, logout } from "../coreActions";
import Avatar from "./Avatar";
import { User } from "firebase";
import {Theme} from "../../types";

const styles = (theme: Theme): Styles => ({
  Header: {
    backgroundColor: theme.backgroundColor,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  masthead: {
    margin: 0,
    paddingLeft: "20px",
    fontSize: "3rem",
    transition: "font-size 1s",
  },
  headerText: {
    padding: "20px",
    backgroundColor: theme.highlightColor,
    color: theme.secondFont
  },
  link: {
    paddingRight: "10px",
    color: theme.fontColor
  },
  userInfo: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "20px"
  },
  error: {
    color: "red"
  }
});

interface Props {
  classes: { [s: string]: string };
  user: User;
  error: string;
  logout: () => any;
  login: () => any;
}

const Header: React.SFC<Props> = ({ classes, user, logout, login }) => {
  return (
    <div className={classes.Header}>
      <div className={classes.masthead}>
        <Link to="/">
          <h1 className={classes.headerText}> HackNYU </h1>
        </Link>
      </div>
      <div className={classes.userInfo}>
        <h1 className={classes.signUp}>
          <Link to="/signup">
            <div className={classes.link}> Sign Up! </div>
          </Link>
        </h1>
        <h1 className={classes.learnMore}>
          <Link to="/about">
            <div className={classes.link}> Learn More! </div>
          </Link>
        </h1>
        {user ? (
          <div>
            <Avatar user={user} logout={logout}/>
          </div>
        ) : (
          <h1>
            <a href="#" className={classes.link} onClick={login}>
              Login!
            </a>
          </h1>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.core.user,
  error: state.core.error
});

const mapDispatchToProps = (dispatch: any) => ({
  login: () => {
    dispatch(login());
  },
  logout: () => {
    dispatch(logout());
  }
});

export default injectSheet(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
