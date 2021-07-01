import React from "react";
import { connect } from "react-redux";
import LeaderItem from "./LeaderItem";

const Leaderboard = ({ sortedUsers }) => {
  return (
    <>
      <h3>leaderboard</h3>
      <ul>
        {sortedUsers.map((u) => (
          <LeaderItem key={u} id={u} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps({ users }) {
  const sortedUsers = Object.keys(users).sort((a, b) => {
    const sumA =
      Object.keys(users[a].answers).length +
      Object.keys(users[a].answers).length;
    const sumB =
      Object.keys(users[b].answers).length +
      Object.keys(users[b].answers).length;
    return sumB - sumA;
  });

  return {
    sortedUsers,
  };
}

export default connect(mapStateToProps)(Leaderboard);
