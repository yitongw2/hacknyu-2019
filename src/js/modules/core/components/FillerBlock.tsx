import * as React from "react";
import { Styles } from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";

const styles: Styles = {
  FillerBox: {
    // @ts-ignore
    gridArea: (props: FillerBoxProps) => `blank${props.index}`
  }
};

interface FillerBoxProps {
  index: number;
  classes: { [s: string]: string };
}

const FillerBlock: React.SFC<FillerBoxProps> = ({ classes }) => (
  <div className={classes.FillerBox} />
);

export default injectSheet(styles)(FillerBlock);
