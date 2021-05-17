import React from "react";
import Nav from "./components/todo/navFor";
import ToDo from "./components/todo/todo.js";
import "./components/todo/todo.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Nav />
      <ToDo />
    </>
  );
}
