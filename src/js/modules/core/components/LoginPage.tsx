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
import { emailRegex } from "../../constants";

const styles = (theme: Theme): Styles => ({
  LoginPage: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "75%",
    color: theme.fontColor,
    backgroundColor: theme.formBackground
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
    flexDirection: "column",
    fontSize: "1.4rem",
    padding: "5px"
  },
  inputArea: {
    display: "flex"
  },
  label: {
    padding: "5px",
    width: "100px"
  },
  error: {
    color: "red",
    fontSize: "1rem"
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

  const handleGoogleLogin = (event: Event) => {
    event.preventDefault();
    loginWithGoogle();
  }

  return (
    <div className={classes.LoginPage}>
      <h1> Login </h1>
      <Form
        onSubmit={handleSubmit}
        validate={values => {
          let errors: { email?: string; password?: string } = {};
          //@ts-ignore
          if (values.email && !emailRegex.test(values.email)) {
            errors.email = "Invalid email";
          }
          //@ts-ignore
          if (values.password && values.password.length < 8) {
            errors.password =
              "Password is too short, must be at least 8 characters";
          }
          return errors;
        }}
        render={({ handleSubmit, invalid }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <Field name="email">
              {({ input, meta }) => (
                <div className={classes.field}>
                  <div className={classes.inputArea}>
                    <div className={classes.label}>Email: </div>
                    <input
                      {...input}
                      type="email"
                      placeholder="alyssap@hacker.com"
                      className={classes.input}
                    />
                  </div>
                  {meta.error &&
                    meta.touched && (
                      <span className={classes.error}>{meta.error}</span>
                    )}
                </div>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <div className={classes.field}>
                  <div className={classes.inputArea}>
                    <div className={classes.label}>Password:</div>
                    <input
                      {...input}
                      className={classes.input}
                      placeholder="**********"
                      type="password"
                    />
                  </div>
                  {meta.error &&
                    meta.touched && (
                      <span className={classes.error}>{meta.error}</span>
                    )}
                </div>
              )}
            </Field>
            <Button disabled={invalid} width="100px" type="submit">
              Submit
            </Button>
            <Button width="200px" onClick={handleGoogleLogin}>
              Login w/ Google
            </Button>
          </form>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  loginWithGoogle: () => {
    dispatch(login());
  }
});

export default compose(injectSheet(styles), connect(null, mapDispatchToProps))(
  LoginPage
);
