import React from "react";
import { connect } from "react-redux";

const LeaderItem = ({ user }) => {
  const style = {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
  };
  const { name, avatarURL, answers, questions } = user;

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
            <h5 className="card-title">
              Answered Questions: {Object.keys(answers).length}
              <br />
              Created Questions: {questions.length}
            </h5>
          </div>
          <div className="card-footer">
            Score: {Object.keys(answers).length + questions.length}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }, { id }) => {
  return {
    user: users[id],
  };
};

export default connect(mapStateToProps)(LeaderItem);
