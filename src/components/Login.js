import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { setAuthed } from "../actions/authedUser";

const Login = ({ users, dispatch }) => {
  const [msg, setMsg] = useState("");
  const [userId, setUserId] = useState(null);

  const handleChange = (e) => {
    let id = e.target.value;
    setUserId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId !== null) {
      dispatch(setAuthed(userId));
    } else {
      setMsg("please select a user form the list !!");
    }
  };

  return (
    <Row className="justify-content-center align-items-center min-vh-100">
      <Col md={6}>
        <Card bg="info" className="text-center">
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formGridState">
                {msg ? alert(msg) : null}
                <Form.Control as="select" onChange={handleChange}>
                  <option value="">Select Username</option>
                  {users.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button type="submit" className="mt-2" variant="outline-light">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users).map((id) => ({
      value: id,
      name: users[id].name,
    })),
  };
};

export default connect(mapStateToProps)(Login);
