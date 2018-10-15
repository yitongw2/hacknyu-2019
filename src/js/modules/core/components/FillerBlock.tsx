import * as React from "react";
import { Styles } from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";

const styles: Styles = {
  FillerBox: {
    gridArea: props => `blank${props.index}`
  }
};

interface FillerBoxProps {
  classes: { [s: string]: string };
}

const FillerBlock: React.SFC<FillerBoxProps> = ({ classes }) => (
  <div className={classes.FillerBox} />
);

export default injectSheet(styles)(FillerBlock);
