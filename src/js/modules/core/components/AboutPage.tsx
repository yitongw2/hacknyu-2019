import * as React from "react";
import injectSheet, { Styles } from "react-jss/lib/injectSheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { Theme } from "../../types";
import { faAws } from "@fortawesome/free-brands-svg-icons/faAws";

const styles = (theme: Theme): Styles => ({
  AboutPage: {
    fontSize: "2em",
    backgroundColor: theme.secondBackground,
    color: theme.secondFont,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "5%"
  },
  icons: {
    display: "flex",
    width: "100px",
    justifyContent: "space-around"
  },
  text: {
    padding: "0 10px 0",
    maxWidth: "500px"
  }
});

interface Props {
  classes: { [s: string]: string };
}

const AboutPage: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.AboutPage}>
      <h1> About Us </h1>
      <p className={classes.text}>
        HackNYU has been entirely student run from the beginning. We rely on the
        generosity of volunteers and sponsors to host HackNYU every year. If you
        are interested in sponsoring HackNYU, please contact us. If you are
        interested in volunteering, sign up here.
      </p>

      <h2> Tech Details </h2>
      <div className={classes.icons}>
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faAws} />
      </div>
      <p className={classes.text}>
      This site is written in React with TypeScript, Firebase, JSS and Redux.
      It is hosted on AWS. It is hosted on AWS.
      If you have any complaints, bugs or compliments, please email nick at nicholasyang.com.
      </p>
    </div>
  );
};

export default injectSheet(styles)(AboutPage);
