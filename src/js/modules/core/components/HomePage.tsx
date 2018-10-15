import * as React from "react";
import { Link } from "react-router-dom";
import injectSheet, { Styles } from "react-jss";

const styles: Styles = {
  learnMore: {
    fontsize: "2em"
  },
  signUp: {
    display: "flex",
    padding: "30px",
    fontSize: "2em"
  }
};

interface Props {
  classes: { [s: string]: string };
}

const HomePage: React.SFC<Props> = ({ classes }) => {
  return (
    <div>
      <Link to="/signup">
        <h1 className={classes.signUp}> Sign Up! </h1>
      </Link>
      <Link to="/about">
        <h1 className={classes.learnMore}> Learn More </h1>
      </Link>
    </div>
  );
};

export default injectSheet(styles)(HomePage);
