import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Question = ({ question, author }) => {
  const style = {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
  };
  return (
    <div className="card mb-3 mt-3" style={{ width: "500px" }}>
      <div className="m-3 font-weight-bold">{author.name} Asks ...</div>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            style={style}
            className="bd-placeholder-img"
            src={author.avatarURL}
            aria-label="Placeholder: Image"
            preserveAspectRatio="xMidYMid slice"
            role="img"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{question.optionOne.text}</h5>
            <small>or</small>
            <p className="card-text">{question.optionTwo.text}</p>
            <Link to={`/questions/${question.id}`}>
              <Button variant="outline-dark">View Question</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users }, { id }) => {
  //get the specific question
  const question = questions[id];
  // get the auther of this question
  const author = users[question.author];
  return {
    question: question ? question : null,
    author: question ? author : null,
  };
};

export default connect(mapStateToProps)(Question);
