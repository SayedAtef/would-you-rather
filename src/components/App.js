import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import Container from "react-bootstrap/Container";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import QuestionDetails from "./QuestionDetails";

const App = ({ authedUser, dispatch }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <>
      {!authedUser ? (
        <Login />
      ) : (
        <>
          <Router>
            <Container>
              <NavBar />
              <main>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route path="/questions/:id" component={QuestionDetails} />
                </Switch>
              </main>
            </Container>
          </Router>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
