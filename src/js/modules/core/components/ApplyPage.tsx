import * as React from "react";
import { Styles } from "react-jss";
import { Theme } from "../../types";
import injectSheet from "react-jss/lib/injectSheet";
import { FormEvent } from "react";
import { Form, Field } from "react-final-form";

const styles = (theme: Theme): Styles => ({
  ApplyPage: {
    display: "flex",
    width: "80%",
    height: "100%",
    maxWidth: "800px",
    flexDirection: "column",
    padding: "20px",
    alignItems: "center",
    backgroundColor: theme.formBackground
  },
  header: {
    padding: "10px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    lineHeight: "1.3em",
    fontSize: "1.5em"
  },
  inputs: {
    display: "flex",
    lineHeight: "3em",
    flexDirection: "column"
  },
  input: {
    marginLeft: "5px",
    padding: "5px",
    fontSize: "1em"
  },
  submit: {
    width: "150px",
    padding: "5px",
    backgroundColor: theme.highlightColor,
    fontSize: "1em",
    border: "none",
    color: theme.secondFont,
    '&:disabled': {
      backgroundColor: theme.highlightColorHover,
    }
  }
});

interface Props {
  classes: { [s: string]: string };
}

class ApplyPage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  handleChange = (event: FormEvent<HTMLInputElement>) => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = (values: [string]) => {
    console.log(values);
  };

  render() {
    let { classes } = this.props;
    return (
      <div className={classes.ApplyPage}>
        <h1 className={classes.header}> Apply </h1>
        <Form
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <div className={classes.form}>
              <form onSubmit={handleSubmit}>
                <div className={classes.inputs}>
                  <label>
                    First Name:
                    <Field
                      className={classes.input}
                      name="firstName"
                      component="input"
                      placeholder="Rose"
                    />
                  </label>
                  <label>
                    Last Name:
                    <Field
                      className={classes.input}
                      name="lastName"
                      component="input"
                      placeholder="Kolodny"
                    />
                  </label>
                  <label>
                    Date of Birth:
                    <Field
                      id="date"
                      name="birthDate"
                      label="Date Of Birth"
                      type="date"
                      className={classes.input}
                      component="input"
                    />
                  </label>
                  <button
                    className={classes.submit}
                    type="submit"
                    disabled={pristine || invalid}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(ApplyPage);
