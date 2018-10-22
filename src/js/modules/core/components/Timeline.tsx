import * as React from "react";
import { Styles } from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";
import Line from "./Line";

const styles: Styles = {
  Timeline: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    width: "50vw"
  }
};

interface Props {
  activeTrack: number;
  classes: { [s: string]: string };
}

const colors = ["red", "#6dc066", "#007fcc", "orange"];

const Timeline: React.SFC<Props> = ({ activeTrack, classes }) => {
  return (
    <div className={classes.Timeline}>
      {colors.map((color, index) => {
        if (activeTrack === null || index === activeTrack) {
          return <Line color={color} />;
        }
        return <Line color={"#696969"} />;
      })}
    </div>
  );
};

export default injectSheet(styles)(Timeline);
