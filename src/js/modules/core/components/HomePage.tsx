import * as React from "react";
import injectSheet, { Styles } from "react-jss";
import { State, Theme } from "../../types";
import SubwayLine from "./SubwayLine";
import ApplyButton from "./ApplyButton";
import TrackInfo from "./TrackInfo";
import Timeline from "./Timeline";
import { connect } from "react-redux";
import { compose } from "redux";
import AboutSection from "./AboutSection";

const styles = (theme: Theme): Styles => ({
  HomePage: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.backgroundColor,
    alignItems: "center",
    width: "100%"
  },
  secondSection: {
    display: "flex",
    flexDirection: "column",
    padding: "5% 0 5% 0",
    width: "100%",
    height: "100%",
    backgroundColor: theme.secondBackground,
    color: theme.secondFont
  },
  thirdSection: {
    display: "flex",
    flexDirection: "column",
    padding: "5% 0 5% 0",
    width: "100%",
    height: "100%",
    backgroundColor: theme.highlightColor,
    color: theme.secondFont
  },
  fourthSection: {
    display: "flex",
    flexDirection: "column",
    padding: "5% 0 5% 0",
    width: "100%",
    height: "100%",
    backgroundColor: theme.thirdBackground,
    color: theme.secondFont
  },
  lines: {
    display: "flex",
    minHeight: "300px",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px 0 0 0",
    width: "100%"
  },
  quote: {
    fontSize: "3em",
    margin: "0 5% 0 5%",
    maxWidth: "400px"
  },
  quoteAuthor: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  }
});

interface HomePageProps {
  classes: { [s: string]: string };
  viewportWidth: number;
}

class HomePage extends React.Component<HomePageProps> {
  constructor(props: HomePageProps) {
    super(props);
  }

  render() {
    let { classes, viewportWidth } = this.props;
    return (
      <div className={classes.HomePage}>
        <ApplyButton />
        <div className={classes.lines}>
          <SubwayLine delay="-1.2s" color="#6dc066" />
          <SubwayLine delay="-1.6s" color="red" />
          <SubwayLine delay="-2s" color="#007fcc" />
          <SubwayLine delay="-2.4s" color="orange" />
        </div>
        <div className={classes.secondSection}>
          <AboutSection />
        </div>
        {/*<div className={classes.thirdSection}>
          <div className={classes.quote}>
            <p>Inspirational quote here!</p>
            <span className={classes.quoteAuthor}> --- Albert Einstein </span>
          </div>
        </div>*/}
        <div className={classes.fourthSection}>
          <TrackInfo />

          {viewportWidth > 800 && <Timeline />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  viewportWidth: state.core.viewportWidth
});

export default compose(injectSheet(styles), connect(mapStateToProps))(HomePage);
