import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TodoList from "./todoList";

const styles = theme => ({
  form: {
    marginBottom: 36
  },
  textField: {
    width: "100%",
    marginRight: 12
  },
  button: {
    width: 120
  }
});

class TodoForm extends Component {
  state = {
    data: {
      input: ""
    },
    todos: []
  };

  handleChange = ({ target: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = { ...this.state.data };
    const todos = [...this.state.todos];
    const todo = {
      text: data.input,
      checked: false
    };
    todos.push(todo);
    data.input = "";
    this.setState({ data, todos });
  };

  handleChecked = index => {
    const todos = [...this.state.todos];
    todos[index].checked === false
      ? (todos[index].checked = true)
      : (todos[index].checked = false);
    this.setState({ todos });
  };

  render() {
    const { classes } = this.props;
    const { data, todos } = this.state;

    return (
      <Fragment>
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <Box display="flex">
            <TextField
              name="input"
              placeholder="E.g. Adopt a dog"
              variant="outlined"
              className={classes.textField}
              onChange={this.handleChange}
              value={data.input}
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              disableElevation
              className={classes.button}
              type="submit"
            >
              Add
            </Button>
          </Box>
        </form>
        <TodoList todos={todos} handleChecked={this.handleChecked} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(TodoForm);
