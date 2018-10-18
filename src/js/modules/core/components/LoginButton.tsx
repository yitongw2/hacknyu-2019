import * as React from "react";
import injectSheet, { Styles } from "react-jss";

const styles: Styles = {
  LoginButton: {
    fontSize: "1.4em",
    backgroundColor: "white",
    transition: "background-color 1s",
    padding: "10px",
    '&:hover': {
      backgroundColor: "#686963"
    }
  }
};

interface Props {
  classes: { [s: string]: string };
  login: () => any;
}
const LoginButton: React.SFC<Props> = ({ classes, login }) => {
  return (
    <button className={classes.LoginButton} onClick={login}>
      Login
    </button>
  );
};

export default injectSheet(styles)(LoginButton);
