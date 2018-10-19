import * as React from "react";
import { Styles } from "react-jss";
import {ReactNode} from "react";
import injectSheet from "react-jss/lib/injectSheet";

const styles: Styles = {
  SubwayIcon: {
    // @ts-ignore
    backgroundColor: props => props.color,
    fontFamily: "Helvetica, sans-serif",
    width: "80px",
    height: "80px",
    borderRadius: "80px",
    fontSize: "50px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "85px",
    fontWeight: 800,
    float: "left",
    margin: "20px",
    transition: "all .2s ease-in-out",
    '&:hover': {
      transform: "scale(1.5)"
    }
  }
};
interface Props {
  color: string;
  children: ReactNode;
  classes: { [s: string]: string }
}
const SubwayIcon: React.SFC<Props> = ({ classes, children }) => {
  return (
    <div className={classes.SubwayIcon}>
      {children}
    </div>
  )
}

export default injectSheet(styles)(SubwayIcon);