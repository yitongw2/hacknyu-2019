import * as React from "react";
import SubwayIcon from "./SubwayIcon";
import {ReactNode, ReactNodeArray} from "react";
import { Styles } from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";
import Observer from "@researchgate/react-intersection-observer";


interface Props {
  id: number;
  updateActiveTrack: (n: number) => void;
  classes: { [s: string]: string };
  icons: ReactNodeArray,
  name: string;
  children: ReactNode,
}

const styles: Styles = {
  Track: {
    display: "flex",
    flexDirection: "column",
    padding: "20px 0 20px 0"
  },
  subwayIcons: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row"
  },
};

const Track: React.SFC<Props> = ({ id, updateActiveTrack, classes, icons, children, name }) => {
  const handleChange = (event: IntersectionObserverEntry) => {
    if (event.isIntersecting) {
      updateActiveTrack(id)
    }
  }
  return (
    <Observer onChange={handleChange} rootMargin="0% 0% -60%">
    <div className={classes.Track}>
      <div className={classes.subwayIcons}>
        {icons}
      </div>
      <h3> {name} </h3>
      <ul className={classes.description}>{children}</ul>
    </div>
    </Observer>
  );
};

export default injectSheet(styles)(Track);
