import * as React from "react";
import injectSheet, { Styles } from "react-jss/lib/injectSheet";
import { ReactNode } from "react";
import Timeline from "./Timeline";
import { State } from "../../types";
import { connect } from "react-redux";
import { compose } from "redux";
import { Theme } from "theming";

// Minimum width for timeline
const MIN_TIMELINE_WIDTH = 500;
const mediaTag = `@media (max-width: ${MIN_TIMELINE_WIDTH})`;

const styles = (_: Theme): Styles => ({
  Section: {
    display: "flex",
    flexDirection: "row",
    height: "100%"
  },
  content: {
    paddingTop: "5%",
    width: "70vw"
  },
  timeline: {
    display: "flex",
    justifyContent: "center",
    width: "30vw"
  },
  // @ts-ignore
  [mediaTag]: {
    content: {
      width: "100vw"
    }
  }
});
interface Props {
  className: string;
  classes: { [s: string]: string };
  children: ReactNode;
  viewportWidth: number;
}

const Section: React.SFC<Props> = ({
  className,
  classes,
  children,
  viewportWidth
}) => {
  return (
    <div className={className}>
      <div className={classes.Section}>
        <div className={classes.content}>{children}</div>
        {viewportWidth > MIN_TIMELINE_WIDTH && (
          <div className={classes.timeline}>
              <Timeline />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  viewportWidth: state.core.viewportWidth
});

export default compose(injectSheet(styles), connect(mapStateToProps))(Section);
