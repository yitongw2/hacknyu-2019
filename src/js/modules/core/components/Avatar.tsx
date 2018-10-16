import * as React from "react";
import injectSheet, { Styles } from "react-jss";

const styles: Styles = {
  Avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%"
  }
};

interface Props {
  classes: { [s: string]: string };
  url: string;
}

// Earth Water Fire Air
const Avatar: React.SFC<Props> = ({ classes, url }) => {
  return <img className={classes.Avatar} src={url} />;
};

export default injectSheet(styles)(Avatar);
