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
  },

};

interface Props {
  classes: { [s: string]: string };
}

const colors = ["red", "#6dc066", "#007fcc", "orange"];

const Timeline: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.Timeline}>
      {colors.map(color => (
        <Line color={color} />
      ))}
    </div>
  );
};

export default injectSheet(styles)(Timeline);
