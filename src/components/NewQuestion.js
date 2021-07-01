import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { handleAddQuestion } from "../actions/questions";

const NewQuestion = ({ dispatch }) => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [bool, setBool] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    name === "optionOne" ? setOptionOne(value) : setOptionTwo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionOne, optionTwo));
    setBool(true);
  };
  if (bool === true) {
    console.log(optionOne, optionTwo);
    return <Redirect to="/" />;
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card bg="light" className="m-3 text-center">
            <Card.Header className="text-center">
              <h2>Create new Question</h2>
            </Card.Header>
            <Card.Body>
              <h5 className="text-start">Would you rather ...</h5>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="optionOne">
                  <Form.Control
                    placeholder="Enter Option One"
                    type="text"
                    name="optionOne"
                    value={optionOne}
                    onChange={handleChange}
                  />
                </Form.Group>
                <h3>
                  <small>OR</small>
                </h3>
                <Form.Group controlId="optionTwo">
                  <Form.Control
                    placeholder="Enter Option Two"
                    type="text"
                    name="optionTwo"
                    value={optionTwo}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  variant="outline-dark"
                  className="mt-3"
                  disabled={optionOne === "" || optionTwo === ""}
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default connect()(NewQuestion);
