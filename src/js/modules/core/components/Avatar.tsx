import * as React from "react";
import injectSheet, { Styles } from "react-jss";
import { User } from "firebase";

const styles: Styles = {
  Avatar: {
    width: "50px",
    height: "50px",
    padding: "10px",
    borderRadius: "50%"
  },
};

interface Props {
  classes: { [s: string]: string };
  user: User;
}

// Earth Water Fire Air
const Avatar: React.SFC<Props> = ({ classes, user }) => {
  return <img className={classes.Avatar} src={user.photoURL} />;
};

export default injectSheet(styles)(Avatar);
