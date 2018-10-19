import * as React from "react";
import injectSheet, { Styles } from "react-jss";
import { Theme } from "../../types";
import SubwayIcon from "./SubwayIcon";
import SubwayLine from "./SubwayLine";
import ApplyButton from "./ApplyButton";

const styles = (theme: Theme): Styles => ({
  HomePage: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.backgroundColor,
    alignItems: "center",
    width: "100%"
  },
  secondContent: {
    padding: "5% 0 5% 0",
    width: "100%",
    height: "100%",
    backgroundColor: theme.secondBackground,
    color: theme.secondFont
  },
  lines: {
    display: "flex",
    minHeight: "300px",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px 0 0 0",
    width: "100%"
  },
  tracks: {
    fontSize: "2em",
    margin: "0 5% 0 5%"
  },
  track: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 0 20px 0"
  },
  subwayIcons: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row"
  },
});

interface Props {
  classes: { [s: string]: string };
}

const HomePage: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.HomePage}>
      <ApplyButton />
      <div className={classes.lines}>
        <SubwayLine delay="-1.2s" color="#6dc066" />
        <SubwayLine delay="-1.6s" color="red" />
        <SubwayLine delay="-2s" color="#007fcc" />
        <SubwayLine delay="-2.4s" color="orange" />
      </div>
      <div className={classes.secondContent}>
        <div className={classes.tracks}>
          <h2> Join A Track </h2>
          <div className={classes.track}>
            <h3> Healthcare </h3>
            <div className={classes.subwayIcons}>
              <SubwayIcon color="red"> 1 </SubwayIcon>
              <SubwayIcon color="red"> 2 </SubwayIcon>
              <SubwayIcon color="red"> 3 </SubwayIcon>
            </div>
          </div>
          <div className={classes.track}>
            <h3> Sustainability and Social Impact </h3>
            <div className={classes.subwayIcons}>
              <SubwayIcon color="#6dc066"> 4 </SubwayIcon>
              <SubwayIcon color="#6dc066"> 5 </SubwayIcon>
              <SubwayIcon color="#6dc066"> 6 </SubwayIcon>
            </div>
          </div>
          <div className={classes.track}>
            <h3> Education </h3>
            <div className={classes.subwayIcons}>
              <SubwayIcon color="#007fcc"> A </SubwayIcon>
              <SubwayIcon color="#007fcc"> C </SubwayIcon>
              <SubwayIcon color="#007fcc"> E </SubwayIcon>
            </div>
          </div>
          <div className={classes.track}>
            <h3> Accessibility & Assistive Technology </h3>
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
