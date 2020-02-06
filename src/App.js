import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TodoForm from "./components/todoForm";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Mylist Cyrus
        </Typography>
        <Typography component="p" gutterBottom>
          Add a todo
        </Typography>
        <TodoForm />
      </Box>
    </Container>
  );
}
