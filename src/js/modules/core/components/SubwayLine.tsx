import * as React from "react";
import { Styles } from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";

interface Props {
  color: string;
  delay: string;
  classes: { [s: string]: string };
}

const styles: Styles = {
  SubwayLine: {
    height: "15px",
    width: "0px",
    margin: "10px 0px 10px 0px",
    borderRadius: "5%",
    // @ts-ignore
    backgroundColor: props => props.color,
    animation: "line 10s infinite",
    // @ts-ignore
    animationDelay: props => props.delay
  },
  "@keyframes line": {
    "0%": {
      width: "0%"
    },
    "9%": {
      width: "25%"
    },
    "18%": {
      width: "50%"
    },
    "27%": {
      width: "75%"
    },
    "36%": {
      width: "100%"
    },
    "45%": {
      width: "100%"
    },
    "54%": {
      width: "100%"
    },
    "63%": {
      width: "100%"
    },
    "72%": {
      width: "75%"
    },
    "81%": {
      width: "50%"
    },
    "90%": {
      width: "25%"
    },
    "100%": {
      width: "0%"
    }
  }
};

const SubwayLine: React.SFC<Props> = ({ classes }) => {
  return <div className={classes.SubwayLine} />;
};

export default injectSheet(styles)(SubwayLine);
