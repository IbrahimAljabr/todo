import React from "react";
import Nav from "./components/todo/navFor";
import Acl from "./components/todo/acl";
import ToDo from "./components/todo/todo.js";
import "./components/todo/todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Settings from "./context/settings";
import LoginProvider from "./context/auth";

export default function App() {
  return (
    <>
      <LoginProvider>
        <Settings>
          <Nav />
          <Acl capability="read">
            <ToDo />
          </Acl>
        </Settings>
      </LoginProvider>
    </>
  );
}
