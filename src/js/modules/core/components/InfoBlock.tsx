import * as React from "react";
import injectSheet, { Styles } from "react-jss/lib/injectSheet";
import { Theme } from "../../types";

const styles = (theme: Theme): Styles => ({
  infoBlock: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5em",
    display: "flex",
    // @ts-ignore
    position: props =>
      props.activeBlocks.has(props.id) ? "fixed" : "absolute",
    // @ts-ignore
    top: props =>
      props.activeBlocks.has(props.id) ? `${20 + 20 * props.id}vh` : "auto",
    // @ts-ignore
    transform: props =>
      props.activeBlocks.has(props.id) ? "none" : "translateX(20vw)",
    transition: "transform 5s, top 5s, display 5s",
    marginTop: "2vh",
    right: "10vw",
    width: "150px",
    height: "150px",
    color: theme.secondFont,
    borderRadius: "10px",
    backgroundColor: theme.highlightColor
  },
  text: {
    width: "100px"
  }
});

interface Props {
  classes: { [s: string]: string };
  activeBlocks: Set<number>;
  id: number;
  text: string;
}
const InfoBlock: React.SFC<Props> = ({ classes, text }) => {
  return (
    <div className={classes.infoBlock}>
      <div className={classes.text}> {text} </div>
    </div>
  );
};

export default injectSheet(styles)(InfoBlock);
