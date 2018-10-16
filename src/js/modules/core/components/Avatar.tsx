import * as React from "react";
import injectSheet, { Styles } from "react-jss";
import { Link } from "react-router-dom";
import { User } from "firebase";

const styles: Styles = {
  Avatar: {
    width: "75px",
    height: "75px",
    borderRadius: "50%"
  },
  menu: {
    position: "absolute",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    alignItems: "center",
    width: "150px",
    height: "150px",
    backgroundColor: "white"
  }
};

interface Props {
  classes: { [s: string]: string };
  user: User;
  logout: () => any;
}

interface State {
  isOpen: boolean;
}

// Earth Water Fire Air
class Avatar extends React.Component<Props, State> {
  private wrapperRef: HTMLDivElement;
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside(event: any) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      alert('You clicked outside of me!');
    }
  }
  
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  setWrapperRef = (node: HTMLDivElement) => {
    this.wrapperRef = node;
  };

  render() {
    let { classes, user, logout } = this.props;
    return (
      <div>
        <img
          onClick={this.handleClick}
          className={classes.Avatar}
          src={user.photoURL}
        />
        {this.state.isOpen && (
          <div ref={this.setWrapperRef} className={classes.menu}>
            <button onClick={logout}>
              <h2> Log Out </h2>
            </button>
            <Link to={`/user/${user.uid}`}>
              <button>
                <h2> Profile </h2>
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(Avatar);
