import * as React from "react";
import injectSheet, { Styles } from "react-jss";
import {Link} from "react-router-dom";

const styles: Styles = {
  Header: {
    paddingTop: "40px",
    paddingBottom: "40px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  headerText: {
    fontSize: "3em"
  }
};

interface HeaderProps {
  classes: { [keys: string]: string };
}
const Header: React.SFC<HeaderProps> = ({ classes }) => {
  return (
    <div className={classes.Header}>
      <Link to="/">
        <h1 className={classes.headerText}> HackNYU </h1>
        <h2> The Most Beautiful Site Ever </h2>
      </Link>
    </div>
  );
};

export default injectSheet(styles)(Header);
