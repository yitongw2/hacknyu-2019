import * as React from "react";
import injectSheet, { Styles } from "react-jss/lib/injectSheet";
import { Theme } from "../../types";
import { Field, Form } from "react-final-form";
import Button from "./Button";
import { connect } from "react-redux";
import { compose } from "redux";
import { emailRegex } from "../../constants";
// @ts-ignore
import { loginWithGoogle, loginWithPassword } from "../coreActions";
import Input from "./Input";

const styles = (theme: Theme): Styles => ({
  RegisterPage: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "75%",
    color: theme.fontColor,
    backgroundColor: theme.formBackground
  }
});

interface Props {
  classes: { [s: string]: string };
  loginWithGoogle: () => any;
}

interface FormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const RegisterPage: React.SFC<Props> = ({ classes, loginWithGoogle }) => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  const handleGoogleLogin = (event: Event) => {
    event.preventDefault();
    loginWithGoogle();
  };

  return (
    <div className={classes.RegisterPage}>
      <h1> Register </h1>
      <Form
        onSubmit={handleSubmit}
        validate={values => {
          let errors: {
            email?: string;
            password?: string;
            passwordConfirmation?: string;
          } = {};
          // Ugh the typing rules for final-form are broken
          //@ts-ignore
          if (values.password && values.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
          }

          //@ts-ignore
          if (values.password && values.passwordConfirmation) {
            //@ts-ignore
            if (values.password !== values.passwordConfirmation) {
              errors.passwordConfirmation =
                "Password must be the same as password confirmation";
            }
          }
          //@ts-ignore
          if (values.email && !emailRegex.test(values.email)) {
            errors.email = "Invalid email";
          }
          return errors;
        }}
        render={({ handleSubmit, invalid }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <Field name="email">
              {({ input, meta }) => (
                <Input
                  input={input}
                  meta={meta}
                  label="Email"
                  type="email"
                  placeholder="ben@bitdiddle.com"
                />
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <Input
                  input={input}
                  meta={meta}
                  label="Password"
                  type="password"
                  placeholder="********"
                />
              )}
            </Field>
            <Field name="passwordConfirmation">
              {({ input, meta }) => (
                <Input
                  input={input}
                  meta={meta}
                  label="Confirm"
                  type="password"
                  placeholder="********"
                />
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
    dispatch(loginWithGoogle());
  },
  loginWithPassword: ({ email, password }: FormValues) => {
    dispatch(loginWithPassword({ email, password }));
  }
});

export default compose(injectSheet(styles), connect(null, mapDispatchToProps))(
  RegisterPage
);
