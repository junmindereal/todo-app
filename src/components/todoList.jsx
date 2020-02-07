import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  strikeThrough: {
    textDecoration: "line-through"
  },
  even: {
    backgroundColor: "rgba(0, 0, 0, 0.02)"
  },
  checked: {
    opacity: 0.4
  }
});

class TodoList extends Component {
  render() {
    const { classes, todos, handleChecked, handleDelete } = this.props;

    return (
      <List>
        {todos.map((todo, index) => (
          <ListItem
            dense
            button
            role={undefined}
            key={index}
            onClick={() => handleChecked(index)}
            className={`${index % 2 === 0 ? classes.even : null} ${
              todo.checked === true ? classes.checked : null
            }`}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
                color="primary"
                checked={todo.checked}
              ></Checkbox>
            </ListItemIcon>
            <ListItemText
              primary={todo.text}
              className={todo.checked === true ? classes.strikeThrough : null}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={() => handleDelete(todo)}
                className={todo.checked === true ? classes.checked : null}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(TodoList);
