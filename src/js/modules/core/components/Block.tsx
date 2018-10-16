import * as React from "react";
import { Styles } from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";

const styles: Styles = {
  Block: {
    width: "50%",
    minWidth: "25vh",
    height: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // @ts-ignore
    gridArea: (props: BlockProps) => props.name,
    // @ts-ignore
    backgroundColor: (props: BlockProps) => props.color
  }
};

interface BlockProps {
  name: string;
  color: string;
  classes: { [s: string]: string };
}
const Block: React.SFC<BlockProps> = ({ classes, children }) => {
  return <div className={classes.Block}>{children}</div>;
};

export default injectSheet(styles)(Block);
