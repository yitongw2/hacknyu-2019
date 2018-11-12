import * as React from "react";
import { Theme } from "../../types";
import { Styles } from "react-jss";
import injectSheet from "react-jss/lib/injectSheet";
import { Field, Form } from "react-final-form";
import Button from "./Button";
import { compose } from "redux";
import { connect } from "react-redux";
//@ts-ignore
import { login } from "../coreActions";
import preventExtensions = Reflect.preventExtensions;

const styles = (theme: Theme): Styles => ({
  LoginPage: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "75%",
    color: theme.secondFont,
    backgroundColor: theme.highlightColor
  },
  form: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    alignItems: "flex-end"
  },
  input: {
    marginLeft: "5px",
    padding: "10px",
    fontSize: "1rem",
    border: "none"
  },
  field: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.4rem",
    padding: "5px"
  },
  label: {
    padding: "5px",
    width: "100px"
  }
});

interface Props {
  classes: { [s: string]: string };
  loginWithGoogle: () => any;
}
const LoginPage: React.SFC<Props> = ({ classes, loginWithGoogle }) => {
  const handleSubmit = (values: [string]) => {
    console.log(values);
  };

  return (
    <div className={classes.LoginPage}>
      <h1> Login </h1>
      <Form
        onSubmit={handleSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <label className={classes.field}>
              <div className={classes.label}>Email:</div>
              <Field
                className={classes.input}
                name="email"
                component="input"
                placeholder="alyssap@hacker.com"
              />
            </label>
            <label className={classes.field}>
              <div className={classes.label}>Password:</div>
              <Field
                className={classes.input}
                name="password"
                placeholder="**********"
                component="input"
                type="password"
              />
            </label>
            <Button width="100px" type="submit">
              Submit
            </Button>
            <Button width="200px" onClick={loginWithGoogle}>
              Login w/ Google
            </Button>
          </form>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  loginWithGoogle: (event: Event) => {
    event.preventDefault();
    dispatch(login());
  }
});

export default compose(injectSheet(styles), connect(null, mapDispatchToProps))(
  LoginPage
);
