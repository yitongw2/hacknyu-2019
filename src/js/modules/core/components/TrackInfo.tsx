import * as React from "react";
import SubwayIcon from "./SubwayIcon";
import { Styles } from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";
import { Theme } from "../../types";
import Track from "./Track";
//import "intersection-observer";

const styles = (theme: Theme): Styles => ({
  TrackInfo: {
    fontSize: "2em",
    backgroundColor: theme.secondBackground,
    margin: "0 5% 0 5%"
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
  updateActiveTrack: (n: number) => void;
}
const TrackInfo: React.SFC<Props> = ({ classes, updateActiveTrack }) => {
  return (
    <div className={classes.TrackInfo}>
      <h2> Join A Track </h2>
      <Track
        id={0}
        key={0}
        updateActiveTrack={updateActiveTrack}
        name="Heathcare"
        icons={[
          <SubwayIcon color="red" radius={15}>
            1
          </SubwayIcon>,
          <SubwayIcon color="red" radius={15}>
            2
          </SubwayIcon>,
          <SubwayIcon color="red" radius={15}>
            3
          </SubwayIcon>
        ]}
      >
        <li className={classes.bullet}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          hendrerit tempor tellus. Donec pretium posuere tellus.
        </li>
        <li className={classes.bullet}>
          Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </li>
        <li className={classes.bullet}>
          Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis.
        </li>
        <li className={classes.bullet}>
          Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan
          nisl.
        </li>
      </Track>
      <Track
        id={1}
        key={1}
        updateActiveTrack={updateActiveTrack}
        name="Sustainability and Social Impact"
        icons={[
          <SubwayIcon color="#6dc066" radius={15}>
            4
          </SubwayIcon>,
          <SubwayIcon color="#6dc066" radius={15}>
            5
          </SubwayIcon>,
          <SubwayIcon color="#6dc066" radius={15}>
            6
          </SubwayIcon>
        ]}
      >
        <li className={classes.bullet}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          hendrerit tempor tellus. Donec pretium posuere tellus.
        </li>
        <li className={classes.bullet}>
          Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus.
        </li>
        <li className={classes.bullet}>
          Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis.
        </li>
        <li className={classes.bullet}>
          Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan
          nisl.
        </li>
      </Track>
      <Track
        id={2}
        key={2}
        updateActiveTrack={updateActiveTrack}
        name="Education"
        icons={[
          <SubwayIcon color="#007fcc" radius={15}>
            A
          </SubwayIcon>,
          <SubwayIcon color="#007fcc" radius={15}>
            C
          </SubwayIcon>,
          <SubwayIcon color="#007fcc" radius={15}>
            E
          </SubwayIcon>
        ]}
      >
        <ul className={classes.description}>
          <li className={classes.bullet}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            hendrerit tempor tellus. Donec pretium posuere tellus.
          </li>
          <li className={classes.bullet}>
            Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </li>
          <li className={classes.bullet}>
            Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis.
          </li>
          <li className={classes.bullet}>
            Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan
            nisl.
          </li>
        </ul>
      </Track>
      <Track
        id={3}
        key={3}
        updateActiveTrack={updateActiveTrack}
        name={"Accessibility & Assistive Technology"}
        icons={[
          <SubwayIcon color="orange" radius={15}>
            B
          </SubwayIcon>,
          <SubwayIcon color="orange" radius={15}>
            D
          </SubwayIcon>,
          <SubwayIcon color="orange" radius={15}>
            F
          </SubwayIcon>,
          <SubwayIcon color="orange" radius={15}>
            M
          </SubwayIcon>
        ]}
      >
        <ul className={classes.description}>
          <li className={classes.bullet}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            hendrerit tempor tellus. Donec pretium posuere tellus.
          </li>
          <li className={classes.bullet}>
            Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </li>
          <li className={classes.bullet}>
            Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis.
          </li>
          <li className={classes.bullet}>
            Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan
            nisl.
          </li>
        </ul>
      </Track>
    </div>
  );
};

export default injectSheet(styles)(TrackInfo);
