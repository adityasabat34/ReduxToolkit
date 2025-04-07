import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((existingTodo) => {
        if (existingTodo.id === id) {
          return { ...existingTodo, text };
        }
        return existingTodo;
      });
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
