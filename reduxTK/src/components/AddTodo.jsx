import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Add todo"
        value={input}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          boxSizing: "border-box",
          outline: "none",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          color: "#333",
          backgroundColor: "#f5f5f5",
          transition: "border-color 0.3s ease-in-out",
        }}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
