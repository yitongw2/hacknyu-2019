import * as React from "react";
import injectSheet, { Styles } from "react-jss";

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
    color: "white",
    fontSize: "3em"
  }
};

interface HeaderProps {
  classes: { [keys: string]: string };
}
const Header: React.SFC<HeaderProps> = ({ classes }) => {
  return (
    <div className={classes.Header}>
      <h1 className={classes.headerText}> Welcome To HackNYU 2019 </h1>
    </div>
  );
};

export default injectSheet(styles)(Header);
