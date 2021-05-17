import React, { useEffect, useState } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import useAjax from "../hooks/ajax";
// import "./todo.scss";

const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

const ToDoC = () => {
  const [list, postItem, putItem, getItems, deleteItem] = useAjax(todoAPI);

  useEffect(getItems, [getItems]);
  // const [list, setList] = useState([]);

  // const _addItem = (item) => {
  //   item.due = new Date();
  //   fetch(todoAPI, {
  //     method: "post",
  //     mode: "cors",
  //     cache: "no-cache",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(item),
  //   })
  //     .then((response) => response.json())
  //     .then((savedItem) => {
  //       setList([...list, savedItem]);
  //     })
  //     .catch(console.error);
  // };

  // const _toggleComplete = (id) => {
  //   let item = list.filter((i) => i._id === id)[0] || {};

  //   if (item._id) {
  //     item.complete = !item.complete;

  //     let url = `${todoAPI}/${id}`;

  //     fetch(url, {
  //       method: "put",
  //       mode: "cors",
  //       cache: "no-cache",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(item),
  //     })
  //       .then((response) => response.json())
  //       .then((savedItem) => {
  //         setList(list.map((listItem) => (listItem._id === item._id ? savedItem : listItem)));
  //       })
  //       .catch(console.error);
  //   }
  // };

  // const _getTodoItems = () => {
  //   fetch(todoAPI, {
  //     method: "get",
  //     mode: "cors",
  //   })
  //     .then((data) => data.json())
  //     .then((data) => setList(data.results))
  //     .catch(console.error);
  // };

  // useEffect(_getTodoItems, []);
  useEffect(() => {
    document.title = `To do complete ${list.filter((item) => item.complete).length} / incomplete ${
      list.filter((item) => !item.complete).length
    }`;
  });

  return (
    <>
      <header>
        <h2>There are {list.filter((item) => !item.complete).length} Items To Complete</h2>
      </header>
      <section className="todo">
        <div className="formAdd">
          <TodoForm handleSubmit={postItem} />
        </div>

        <div>
          <TodoList list={list} handleComplete={putItem} handleDelete={deleteItem} />
        </div>
      </section>
    </>
  );
};

export default ToDoC;
