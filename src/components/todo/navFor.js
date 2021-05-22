import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useContext, useState } from "react";
import { LoginContext } from "../../context/auth";
import useForm from "../hooks/form";
import { If, Else, Then } from "react-if";

function NavBarFor(props) {
  const [sign, setSign] = useState(true);
  const context = useContext(LoginContext);
  const [inputChange, formHandleSubmit] = useForm(handleLogin);
  const [SignupChange, handleSignup] = useForm(handleSignupSubmit);

  function handleLogin(user) {
    context.login(user.username, user.password);
  }
  function handleSignupSubmit(user) {
    context.signup(user.username, user.role, user.email, user.password);
  }

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Row>
          <Col className="main-bar">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
          </Col>
        </Row>
        <If condition={context.loggedIn}>
          <Then>
            <Button variant="danger" onClick={context.logout}>
              Log Out
            </Button>
          </Then>
        </If>
        <Else>
          <If condition={!context.loggedIn}>
            <Then>
              <Row>
                <If condition={sign}>
                  <Row>
                    <Form onSubmit={formHandleSubmit}>
                      <Row>
                        <Col>
                          <Form.Control
                            onChange={inputChange}
                            placeholder="username"
                            name="username"
                          />
                        </Col>

                        <Col>
                          <Form.Control
                            onChange={inputChange}
                            placeholder="password"
                            name="password"
                            type="password"
                          />
                        </Col>
                        <Col>
                          <Button variant="success" type="submit">
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                    <Button
                      variant="dark"
                      onClick={() => {
                        setSign(!sign);
                      }}
                    >
                      SignUp
                    </Button>
                  </Row>
                </If>
                <If condition={!sign}>
                  <Row>
                    <Form onSubmit={handleSignup}>
                      <Row>
                        <Col>
                          <Form.Control
                            onChange={SignupChange}
                            placeholder="username"
                            name="username"
                          />
                        </Col>

                        <Col>
                          <Form.Control
                            onChange={SignupChange}
                            placeholder="password"
                            name="password"
                          />
                        </Col>

                        <Col>
                          <Form.Control onChange={SignupChange} placeholder="Email" name="email" />
                        </Col>

                        <Col>
                          <Form.Control name="role" as="select" onChange={SignupChange}>
                            <option value="admin">---</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="editor">Editor</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Button variant="success" type="submit">
                            Signup
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                    <Button
                      variant="dark"
                      onClick={() => {
                        setSign(!sign);
                      }}
                    >
                      LogIn
                    </Button>
                  </Row>
                </If>
              </Row>
            </Then>
          </If>
        </Else>
      </Navbar>
    </>
  );
}

export default NavBarFor;
