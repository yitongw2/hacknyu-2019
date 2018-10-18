import * as React from "react";
import { Link } from "react-router-dom";
import injectSheet, { Styles } from "react-jss";

const styles: Styles = {
  HomePage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "80%"
  },
  learnMore: {
    width: "100%",
  },
  links: {
    fontSize: "2em",
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  signUp: {
    width: "100%",
    display: "flex",
    padding: "30px",
    fontSize: "2em"
  },
  masthead: {
    color: "white",
    fontSize: "4em"
  },
  link: {
    color: "white"
  }
};

interface Props {
  classes: { [s: string]: string };
}

const HomePage: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.HomePage}>
      <h1 className={classes.masthead}> HackNYU </h1>
      <div className={classes.links}>
        <h1 className={classes.signUp}>
          <Link to="/signup">
            <div className={classes.link}> Sign Up! </div>
          </Link>
        </h1>
        <h1 className={classes.learnMore}>
          <Link to="/about">
            <div className={classes.link}> Learn More </div>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default injectSheet(styles)(HomePage);
