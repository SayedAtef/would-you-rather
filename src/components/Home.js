import React from "react";
import { connect } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";
import Question from "./Question";

const Home = ({ ansQ, unAnsQ }) => {
  return (
    <div>
      <Tabs>
        <Tab eventKey="unanswered" title="Unanswered Questions">
          <ul>
            {unAnsQ.map((qid) => (
              <Question key={qid} id={qid} />
            ))}
          </ul>
        </Tab>
        <Tab eventKey="answered" title="Answered Questions">
          <ul className="text-center ">
            {ansQ.map((qid) => (
              <Question key={qid} id={qid} />
            ))}
          </ul>
        </Tab>
      </Tabs>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
  // we get all questions and authed user from users and then getting his answers
  // we filter it then put questions in his answers in ansQ and the rest in unAnsQ
  // then sorting the results accordingly
  return {
    ansQ: Object.keys(questions)
      .filter((questId) => users[authedUser].answers.hasOwnProperty(questId))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    unAnsQ: Object.keys(questions)
      .filter((questId) => !users[authedUser].answers.hasOwnProperty(questId))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  };
};

export default connect(mapStateToProps)(Home);
