import React from "react";
import Button from "react-bootstrap/Button";
import useForm from "../hooks/form";
import Form from "react-bootstrap/Form";

function TodoForm(props) {
  const [inputChange, formHandleSubmit] = useForm(props.handleSubmit);

  // const handleInputChange = (e) => {
  //   setItem({ ...item, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   props.handleSubmit(item);
  //   setItem(item);
  // };

  return (
    <>
      <h3>Add Item</h3>
      <Form onSubmit={formHandleSubmit}>
        <label>
          <span>To Do Item</span>
          <input name="text" placeholder="Add To Do List Item" onChange={inputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={inputChange} />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={inputChange}
          />
        </label>

        <Button type="submit">Add Item</Button>
      </Form>
    </>
  );
}

export default TodoForm;
