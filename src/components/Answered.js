import React from "react";
import { connect } from "react-redux";
import NotFound from "./NotFound";
import Option from "./Option";

const Answered = ({ question, author, authedUser }) => {
  if (question === null) {
    return <NotFound />;
  }

  const style = {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
  };

  const { optionOne, optionTwo } = question;
  const { name, avatarURL } = author;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercent = Math.round(
    (optionOne.votes.length / totalVotes) * 100
  );
  const optionTwoPercent = Math.round(
    (optionTwo.votes.length / totalVotes) * 100
  );

  return (
    <div className="card mb-3 mt-3" style={{ width: "500px" }}>
      <div className="m-3 font-weight-bold">{name} Asks ...</div>
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
          <div className="card-body">
            {optionOne.votes.includes(authedUser) ? (
              <Option
                text="YOUR CHOICE"
                option={optionOne}
                optionPercent={optionOnePercent}
              />
            ) : (
              <Option option={optionOne} optionPercent={optionOnePercent} />
            )}
            <small className="text-muted">
              chosen by {optionOne.votes.length} out of {totalVotes} users
            </small>
            {optionTwo.votes.includes(authedUser) ? (
              <Option
                option={optionTwo}
                text="YOUR CHOICE"
                optionPercent={optionTwoPercent}
              />
            ) : (
              <Option option={optionTwo} optionPercent={optionTwoPercent} />
            )}
            <small className="text-muted">
              chosen by {optionTwo.votes.length} out of {totalVotes} users
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
    authedUser,
  };
};

export default connect(mapStateToProps)(Answered);
