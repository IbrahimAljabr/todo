import React from "react";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";

function TodoList(props) {
  return (
    <section className="bigS">
      {props.list.map((item) => (
        <Toast onClose={() => props.handleDelete(item)}>
          <div className="list--boot" key={item._id + "_"}>
            <Toast.Header>
              <Badge
                className="badgeN"
                variant={item.complete ? "danger" : "success"}
                onClick={() => props.handleComplete(item)}
              >
                {item.complete ? "Complete" : "pending"}
              </Badge>
              <strong>{item.assignee}</strong>
            </Toast.Header>
            <Toast.Body>
              <span className="listColor" onClick={() => props.handleComplete(item._id)}>
                {item.text}
              </span>
            </Toast.Body>
            <Toast.Body>
              <span onClick={() => props.handleComplete(item._id)}>
                Difficulty : {item.difficulty}
              </span>
            </Toast.Body>
          </div>
        </Toast>
      ))}
    </section>
  );
}

// <Button variant="danger" onClick={() => props.handleDelete(item._id)}>X</Button>
export default TodoList;
