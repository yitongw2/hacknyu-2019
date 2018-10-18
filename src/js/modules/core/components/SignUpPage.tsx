import * as React from "react";
import injectSheet, { Styles } from "react-jss";

const styles: Styles = {
  SignUpPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

interface Props {
  classes: {[s: string]: string }
}

const SignUpPage: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.SignUpPage}>
      <h1> Sign Up! </h1>
    </div>
  );
};

export default injectSheet(styles)(SignUpPage);
