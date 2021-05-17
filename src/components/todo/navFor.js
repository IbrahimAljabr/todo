import Navbar from "react-bootstrap/Navbar";
import React from "react";

function NavBarFor() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
      </Navbar>
    </>
  );
}

export default NavBarFor;
