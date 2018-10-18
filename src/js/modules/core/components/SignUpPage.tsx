import * as React from "react";
import injectSheet, { Styles } from "react-jss";
import {compose} from "redux";
import {connect} from "react-redux";
// @ts-ignore
import { login } from "../coreActions"

const styles: Styles = {
  SignUpPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

interface Props {
  classes: {[s: string]: string },
  login: () => any
}

const SignUpPage: React.SFC<Props> = ({ login, classes }) => {

  return (
    <div className={classes.SignUpPage}>
      <h1> Sign Up! </h1>
      <button onClick={login}> Login with Google </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  login: () => {
    dispatch(login());
  }
})
export default compose(injectSheet(styles), connect(null, mapDispatchToProps))(SignUpPage);
