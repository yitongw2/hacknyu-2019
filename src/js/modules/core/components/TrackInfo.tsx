import * as React from "react";
import SubwayIcon from "./SubwayIcon";
import { Styles } from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";
import {Theme} from "../../types";

const styles = (theme: Theme): Styles => ({
  TrackInfo: {
    fontSize: "2em",
    backgroundColor: theme.secondBackground,
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
  description: {
    maxWidth: "800px"
  },
  bullet: {
    padding: "10px"
  }
});

interface Props {
  classes: { [s: string]: string };
}
const TrackInfo: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.TrackInfo}>
      <h2> Join A Track </h2>
      <div className={classes.track}>
        <div className={classes.subwayIcons}>
          <SubwayIcon color="red" radius={15}>
            1
          </SubwayIcon>
          <SubwayIcon color="red" radius={15}>
            2
          </SubwayIcon>
          <SubwayIcon color="red" radius={15}>
            3
          </SubwayIcon>
        </div>
        <h3> Healthcare </h3>
        <ul className={classes.description}>
          <li className={classes.bullet}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            hendrerit tempor tellus. Donec pretium posuere tellus. </li>
          <li className={classes.bullet}> Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. </li>
          <li className={classes.bullet}> Nulla posuere. Donec vitae dolor. Nullam tristique diam non
            turpis.  </li>
          <li className={classes.bullet}> Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum
            accumsan nisl. </li>
        </ul>
      </div>
      <div className={classes.track}>
        <div className={classes.subwayIcons}>
          <SubwayIcon color="#6dc066" radius={15}>
            4
          </SubwayIcon>
          <SubwayIcon color="#6dc066" radius={15}>
            5
          </SubwayIcon>
          <SubwayIcon color="#6dc066" radius={15}>
            6
          </SubwayIcon>
        </div>
        <h3> Sustainability and Social Impact </h3>
        <ul className={classes.description}>
          <li className={classes.bullet}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            hendrerit tempor tellus. Donec pretium posuere tellus. </li>
          <li className={classes.bullet}> Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. </li>
          <li className={classes.bullet}> Nulla posuere. Donec vitae dolor. Nullam tristique diam non
            turpis.  </li>
          <li className={classes.bullet}> Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum
            accumsan nisl. </li>
        </ul>
      </div>
      <div className={classes.track}>
        <div className={classes.subwayIcons}>
          <SubwayIcon color="#007fcc" radius={15}>
            A
          </SubwayIcon>
          <SubwayIcon color="#007fcc" radius={15}>
            C
          </SubwayIcon>
          <SubwayIcon color="#007fcc" radius={15}>
            E
          </SubwayIcon>
        </div>
        <h3> Education </h3>
        <ul className={classes.description}>
          <li className={classes.bullet}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            hendrerit tempor tellus. Donec pretium posuere tellus. </li>
          <li className={classes.bullet}> Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. </li>
          <li className={classes.bullet}> Nulla posuere. Donec vitae dolor. Nullam tristique diam non
            turpis.  </li>
          <li className={classes.bullet}> Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum
            accumsan nisl. </li>
        </ul>
      </div>
      <div className={classes.track}>
        <div className={classes.subwayIcons}>
          <SubwayIcon color="orange" radius={15}>
            B
          </SubwayIcon>
          <SubwayIcon color="orange" radius={15}>
            D
          </SubwayIcon>
          <SubwayIcon color="orange" radius={15}>
            F
          </SubwayIcon>
          <SubwayIcon color="orange" radius={15}>
            M
          </SubwayIcon>
        </div>
        <h3> Accessibility & Assistive Technology </h3>
        <ul className={classes.description}>
          <li className={classes.bullet}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            hendrerit tempor tellus. Donec pretium posuere tellus. </li>
          <li className={classes.bullet}> Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. </li>
          <li className={classes.bullet}> Nulla posuere. Donec vitae dolor. Nullam tristique diam non
            turpis.  </li>
          <li className={classes.bullet}> Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum
            accumsan nisl. </li>
        </ul>
      </div>
    </div>
  );
};

export default injectSheet(styles)(TrackInfo);
