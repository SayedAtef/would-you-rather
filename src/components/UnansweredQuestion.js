import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";
import { handleAddAnswer } from "../actions/questions";
import NotFound from "./NotFound";

const UnansweredQuestion = ({ question, author, dispatch }) => {
  const [msg, setMsg] = useState("");
  const [answer, setAnswer] = useState(null);

  const style = {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
  };

  const handleChange = (e) => {
    let ans = e.target.value;
    setAnswer(ans);
  };

  const handleSubmit = (id, e) => {
    e.preventDefault();

    if (answer !== null) {
      dispatch(handleAddAnswer(id, answer));
    } else {
      setMsg("You must make a choice");
    }
  };

  if (question === null) {
    return <NotFound />;
  }

  const { optionOne, optionTwo, id } = question;
  const { name, avatarURL } = author;

  return (
    <div className="card mb-3 mt-3" style={{ width: "500px" }}>
      <div className="m-3 font-weight-bold">{name} asks:</div>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            style={style}
            className="bd-placeholder-img"
            src={avatarURL}
            aria-label="Placeholder: Image"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Form onSubmit={(e) => handleSubmit(id, e)} onChange={handleChange}>
              {msg ? <p className="text-danger">{msg}</p> : null}
              <Form.Check
                custom
                type="radio"
                id="optionOne"
                label={optionOne.text}
                value="optionOne"
                name="answer"
                className="mb-2"
              />

              <Form.Check
                custom
                type="radio"
                id="optionTwo"
                label={optionTwo.text}
                value="optionTwo"
                name="answer"
                className="mb-2"
              />
              <Button type="submit" variant="outline-dark">
                Vote
              </Button>
            </Form>
          </Card.Body>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users }, { id }) => {
  const question = questions[id];

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
  };
};

export default connect(mapStateToProps)(UnansweredQuestion);
