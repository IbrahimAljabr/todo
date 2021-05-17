import React from "react";
import { useState, useEffect } from "react";
import TodoForm from "./form.js";
import UpdateForm from "./updateform";
import TodoList from "./list.js";
// import "./todo.css";

function ToDo() {
  const [list, setList] = useState([]);
  // const [update, setUpdate] = useState("");
  const [open, setOpen] = useState(false);

  const addItem = (item) => {
    if (typeof item === "object") {
      console.log("🚀🚀🚀 ~~~~ addItem ~~~~ item", typeof item);
      item._id = Math.random();
      item.complete = false;
      setList([...list, item]);
    }
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let nList = list.map((listItem) => (listItem._id === item._id ? item : listItem));
      setList(nList);
    }
  };
  // const handleDelete = (id) => {
  //   let item = list.filter((i) => i._id === id)[0] || {};

  //   if (item._id) {
  //     let nList = list.filter((listItem) => listItem !== item);
  //     setList(nList);
  //   }
  // };
  // const handleUpdate = (id) => {
  //   let item = list.filter((i) => i._id === id)[0] || {};
  //   setUpdate(id);
  //   if (item._id) {
  //     let nList = list.filter((listItem) => (listItem === item ? listItem : "listItem"));
  //     setList(nList);
  //   }

  //   if (!document.getElementById("item")) {
  //     setOpen(!open);
  //     setTimeout(() => {
  //       const itemList = document.getElementById("item");
  //       const range = document.getElementById("range");
  //       const name = document.getElementById("name");
  //       itemList.value = item.text;
  //       range.value = item.difficulty;
  //       name.value = item.assignee;
  //     }, 10);
  //   } else {
  //     setOpen(!open);
  //   }
  // };

  // useEffect(() => {
  //   let list = [
  //     {
  //       _id: 1,
  //       complete: false,
  //       text: "Clean the Kitchen",
  //       difficulty: 3,
  //       assignee: "Person A",
  //     },
  //     {
  //       _id: 2,
  //       complete: false,
  //       text: "Do the Laundry",

  //       difficulty: 2,
  //       assignee: "Person A",
  //     },
  //     {
  //       _id: 3,
  //       complete: false,
  //       text: "Walk the Dog",
  //       difficulty: 4,
  //       assignee: "Person B",
  //     },
  //     {
  //       _id: 4,
  //       complete: true,
  //       text: "Do Homework",
  //       difficulty: 3,
  //       assignee: "Person C",
  //     },
  //     {
  //       _id: 5,
  //       complete: false,
  //       text: "Take a Nap",
  //       difficulty: 1,
  //       assignee: "Person B",
  //     },
  //   ];

  //   setList(list);
  // }, []);

  useEffect(() => {
    document.title = `To Do List : complete ${
      list.filter((item) => item.complete).length
    } / incomplete ${list.filter((item) => !item.complete).length}`;
  });

  return (
    <>
      <header>
        <h2>There are {list.filter((item) => !item.complete).length} Items To Complete</h2>
      </header>

      <section className="todo">
        <div className="formAdd">
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            // handleDelete={handleDelete}
            // handleUpdate={handleUpdate}
          />
        </div>
        <div className="updateForm">
          <UpdateForm data={open} update={list} />
        </div>
      </section>
    </>
  );
}

export default ToDo;
