import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function UpdateForm(props) {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log("🚀🚀🚀 ~~~~ handleSubmit ~~~~ item", e);
    props.handleSubmit(item);
    setItem(item);
  };

  return (
    <>
      <div>
        {props.data ? (
          <form className="updated" onSubmit={handleSubmit}>
            <label>
              <span>To Do Item</span>
              <input id="item" name="text" placeholder="Add To Do List Item" />
            </label>
            <label>
              <span>Difficulty Rating</span>
              <input id="range" defaultValue="1" type="range" min="1" max="5" name="difficulty" />
            </label>
            <label>
              <span>Assigned To</span>
              <input id="name" type="text" name="assignee" placeholder="Assigned To" />
            </label>
            <Button>Update</Button>
          </form>
        ) : null}
      </div>
    </>
  );
}

export default UpdateForm;
