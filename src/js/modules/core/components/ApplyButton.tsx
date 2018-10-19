import * as React from "react";
import injectSheet, { Styles } from "react-jss/lib/injectSheet";
import { State, Theme} from "../../types";
import { Link } from "react-router-dom";
import { User } from "firebase";
import { compose } from "redux";
import { connect } from "react-redux";
// @ts-ignore
import {login } from "../coreActions"

interface Props {
  classes: { [s: string]: string };
  user: User;
  login: () => any;
}
const styles = (theme: Theme): Styles => ({
  apply: {
    marginTop: "45px",
    padding: "10px 20px 10px 20px",
    fontSize: "2.25em",
    fontVariant: "small-caps",
    backgroundColor: theme.highlightColor,
    color: theme.secondFont,
    transition: "color 1s, background-color 1s",
    "&:hover": {
      backgroundColor: theme.highlightColorHover
    }
  }
});
const ApplyButton: React.SFC<Props> = ({ user, login, classes }) => {
  if (user) {
    return (
      <Link to="/apply">
        <div className={classes.apply}> Apply</div>
      </Link>
    );
  }
  return (
    <div onClick={login} className={classes.apply}>
      Apply
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  user: state.core.user
});

const mapDispatchToProps = (dispatch: any) => ({
  login: () => {
    dispatch(login());
  }
});
export default compose(injectSheet(styles), connect(mapStateToProps, mapDispatchToProps))(
  ApplyButton
);
