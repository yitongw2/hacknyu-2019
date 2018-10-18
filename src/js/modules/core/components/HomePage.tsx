import * as React from "react";
import { Link } from "react-router-dom";
import injectSheet, { Styles } from "react-jss";
import Logo from "./Logo";
import { Theme } from "../../types";
import SubwayIcon from "./SubwayIcon";

const styles = (theme: Theme): Styles => ({
  HomePage: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.backgroundColor,
    alignItems: "flex-start",
    width: "100%"
  },
  learnMore: {
    width: "100%"
  },
  links: {
    fontSize: "1.5em",
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  signUp: {
    width: "100%",
    display: "flex",
    padding: "30px"
  },
  link: {
    color: theme.secondFont
  },
  secondContent: {
    padding: "5% 0 5% 0",
    width: "100%",
    height: "100%",
    backgroundColor: theme.secondBackground,
    color: theme.secondFont,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  mainContent: {
    display: "flex",
    minHeight: "300px",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "20px 0 0 0",
    width: "100%"
  },
  info: {
    display: "flex",
    width: "100%",
    height: "50%",
    justifyContent: "center",
    flexDirection: "row",
    paddingBottom: "40px"
  },
  blurb: {
    fontSize: "2em",
    color: theme.fontColor,
    maxWidth: "300px",
    flexShrink: 2
  },
  tracks: {
    fontSize: "2em",
    margin: "0 5% 0 5%"
  },
  track: {
    display: "flex",
    width: "100vw",
    backgroundColor: theme.secondBackground,
    flexDirection: "column",
    padding: "20px 0 20px 0"
  },
  subwayIcons: {
    display: "flex",
    flexDirection: "row"
  },
  logo: {
    height: "18%",
    width: "18%",
    padding: "10px"
  }
});

interface Props {
  classes: { [s: string]: string };
}

const HomePage: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.HomePage}>
      <div className={classes.mainContent}>
        <div className={classes.info}>
          <img className={classes.logo} src="/img/logo.png" />
          <p className={classes.blurb}>
            HackNYU is NYU's premiere hackathon. It takes place in New York,
            Shanghai and Abu Dhabi
          </p>
        </div>
      </div>
      <div className={classes.secondContent}>
        <div className={classes.tracks}>
          <h2> Join A Track </h2>
          <div className={classes.track}>
            <h2> Healthcare </h2>
            <div className={classes.subwayIcons}>
              <SubwayIcon color="red"> 1 </SubwayIcon>
              <SubwayIcon color="red"> 2 </SubwayIcon>
              <SubwayIcon color="red"> 3 </SubwayIcon>
            </div>
          </div>
          <div className={classes.track}>
            <h2> Sustainability and Social Impact </h2>
            <div className={classes.subwayIcons}>
              <SubwayIcon color="#6dc066"> 4 </SubwayIcon>
              <SubwayIcon color="#6dc066"> 5 </SubwayIcon>
              <SubwayIcon color="#6dc066"> 6 </SubwayIcon>
            </div>
          </div>
          <div className={classes.track}>
            <h2> Education </h2>
            <div className={classes.subwayIcons}>
              <SubwayIcon color="#007fcc"> A </SubwayIcon>
              <SubwayIcon color="#007fcc"> C </SubwayIcon>
              <SubwayIcon color="#007fcc"> E </SubwayIcon>
            </div>
          </div>
          <div className={classes.track}>
            <h2> Accessibility & Assistive Technology </h2>
            <div className={classes.subwayIcons}>
              <SubwayIcon color="orange"> B </SubwayIcon>
              <SubwayIcon color="orange"> D </SubwayIcon>
              <SubwayIcon color="orange"> F </SubwayIcon>
              <SubwayIcon color="orange"> M </SubwayIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(styles)(HomePage);
