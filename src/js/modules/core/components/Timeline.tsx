import * as React from "react";
import { Styles } from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";

const styles: Styles = {
  Timeline: {
    flexShrink: 2,
    height: "100%"
  },
  line: {
    height: "100%",
    width: "25px",
    backgroundColor: "#6dc066"
  }
};

interface Props {
  classes: { [s: string]: string };
}
const Timeline: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.Timeline}>
      <div className={classes.line} />
    </div>
  );
};

export default injectSheet(styles)(Timeline);
