import * as React from "react"
import TrackInfo from "./TrackInfo";
import injectSheet, {Styles} from "react-jss/lib/injectSheet";
import {Theme} from "../../types";

const styles = (theme: Theme): Styles => ({
  TracksPage: {
    display: "flex",
    width: "100%",
    backgroundColor: theme.thirdBackground,
    color: theme.secondFont
  }
})

interface Props {
  classes: {[s: string]: string }
}
const TracksPage: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.TracksPage}>
      <TrackInfo/>
    </div>
  )
}

export default injectSheet(styles)(TracksPage)