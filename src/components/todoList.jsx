import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

class TodoList extends Component {
  render() {
    const { todos, handleChecked } = this.props;
    return (
      <List>
        {todos.map((todo, index) => (
          <ListItem
            dense
            button
            role={undefined}
            key={index}
            onClick={() => handleChecked(index)}
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
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default TodoList;
