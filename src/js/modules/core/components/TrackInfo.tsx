import * as React from "react"
import SubwayIcon from "./SubwayIcon";
import {Styles} from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";

const styles: Styles = {
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
}

interface Props {
  classes: { [s: string]: string }
}
const TrackInfo: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.tracks}>
      <h2> Join A Track </h2>
      <div className={classes.track}>
        <h3> Healthcare </h3>
        <div className={classes.subwayIcons}>
          <SubwayIcon color="red" radius={30}> 1 </SubwayIcon>
          <SubwayIcon color="red" radius={30}> 2 </SubwayIcon>
          <SubwayIcon color="red" radius={30}> 3 </SubwayIcon>
        </div>
      </div>
      <div className={classes.track}>
        <h3> Sustainability and Social Impact </h3>
        <div className={classes.subwayIcons}>
          <SubwayIcon color="#6dc066" radius={30}> 4 </SubwayIcon>
          <SubwayIcon color="#6dc066" radius={30}> 5 </SubwayIcon>
          <SubwayIcon color="#6dc066" radius={30}> 6 </SubwayIcon>
        </div>
      </div>
      <div className={classes.track}>
        <h3> Education </h3>
        <div className={classes.subwayIcons}>
          <SubwayIcon color="#007fcc" radius={30}> A </SubwayIcon>
          <SubwayIcon color="#007fcc" radius={30}> C </SubwayIcon>
          <SubwayIcon color="#007fcc" radius={30}> E </SubwayIcon>
        </div>
      </div>
      <div className={classes.track}>
        <h3> Accessibility & Assistive Technology </h3>
        <div className={classes.subwayIcons}>
          <SubwayIcon color="orange" radius={30}> B </SubwayIcon>
          <SubwayIcon color="orange" radius={30}> D </SubwayIcon>
          <SubwayIcon color="orange" radius={30}> F </SubwayIcon>
          <SubwayIcon color="orange" radius={30}> M </SubwayIcon>
        </div>
      </div>
    </div>
  )
};

export default injectSheet(styles)(TrackInfo);