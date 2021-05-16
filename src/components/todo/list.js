import React from "react";
import Button from 'react-bootstrap/Button';

function TodoList(props) {
  return (
    <ul>
      {props.list.map((item) => (
        <li className={`complete-${item.complete.toString()}`} key={item._id}>
          <span className="listColor" onClick={() => props.handleComplete(item._id)}>
            {item.text}
          </span>
          <Button variant="danger" onClick={() => props.handleDelete(item._id)}>X</Button>
          <Button onClick={() => props.handleUpdate(item._id)}>Edit</Button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
