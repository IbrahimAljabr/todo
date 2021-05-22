import React, { useEffect } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import useAjax from "../hooks/ajax";
import ACL from "./acl";

const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

const ToDoC = () => {
  const [list, postItem, putItem, getItems, deleteItem] = useAjax(todoAPI);

  useEffect(getItems, [getItems]);

  useEffect(() => {
    document.title = `To do complete ${list.filter((item) => item.complete).length} / incomplete ${
      list.filter((item) => !item.complete).length
    }`;
  });

  return (
    <main className="bigM">
      <header>
        <h2>There are {list.filter((item) => !item.complete).length} Items To Complete</h2>
      </header>
      <section className="todo">
        <ACL capability="create">
          <div className="formAdd">
            <TodoForm handleSubmit={postItem} />
          </div>
        </ACL>

        <div>
          <TodoList list={list} handleComplete={putItem} handleDelete={deleteItem} />
        </div>
      </section>
    </main>
  );
};

export default ToDoC;
