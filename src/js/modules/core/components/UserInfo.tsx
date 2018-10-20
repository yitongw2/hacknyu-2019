import * as React from "react"
import {User} from "firebase";
import {Styles} from "react-jss";
import Avatar from "./Avatar";
import injectSheet from "react-jss/lib/injectSheet";
import {Theme} from "../../types";

interface Props {
  classes: { [s: string]: string }
  user: User
}
const styles = (theme: Theme): Styles => ({
  UserInfo: {
    backgroundColor: theme.highlightColor,
    display: "flex",
    flexDirection: "row",
    fontSize: "0.8rem",
    color: theme.secondFont,
    padding: "10px 10px 10px 20px",
    position: "fixed",
    top: "0",
    right: "0"
  },
  greeting: {
    maxWidth: "150px"
  },
  "@media (max-width: 800px)": {
    UserInfo: {
      bottom: "0",
      top: "auto"
    }
  }
})

const UserInfo: React.SFC<Props> = ({ classes, user }) => {
  return (
    <div className={classes.UserInfo}>
      <h2 className={classes.greeting}> Welcome {user.displayName}! </h2>
      <Avatar user={user} />
    </div>
  )
};

export default injectSheet(styles)(UserInfo);
