import * as React from "react";
import injectSheet from "react-jss/lib/injectSheet";
import { ReactNode } from "react";
import Timeline from "./Timeline";

const styles = {
  Section: {
    // @ts-ignore
    backgroundColor: props => props.backgroundColor,
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  content: {
    paddingTop: "5%",
    width: "70vw"
  },
  timeline: {
    display: "flex",
    justifyContent: "center",
    width: "30vw"
  }
};
interface Props {
  className: string;
  classes: { [s: string]: string };
  children: ReactNode;
}
const Section: React.SFC<Props> = ({ className, classes, children }) => {
  return (
    <div className={className}>
    <div className={classes.Section}>
      <div className={classes.content}>
      {children}
      </div>
      <div className={classes.timeline}>
        <Timeline />
      </div>
    </div>
    </div>
  );
};

export default injectSheet(styles)(Section);
