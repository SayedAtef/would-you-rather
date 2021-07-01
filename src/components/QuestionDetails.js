import React from "react";
import { connect } from "react-redux";
import UnansweredQuestion from "./UnansweredQuestion";
import Answered from "./Answered";

const QuestionDetails = ({ authedUserAnswers, match }) => {
  const id = match.params.id;
  const answered = authedUserAnswers.hasOwnProperty(id) ? true : false;

  return (
    <>{answered ? <Answered id={id} /> : <UnansweredQuestion id={id} />}</>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUserAnswers: users[authedUser].answers,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
