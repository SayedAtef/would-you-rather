import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import { logOut } from "../actions/authedUser";

const NavBar = ({ loggedIn, dispatch }) => {
  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Navbar expand="lg" bg="light" className="p-3">
        <Navbar.Brand as={Link} to="/">
          Would You Rather ?
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add">
              New Question
            </Nav.Link>
            <Nav.Link as={NavLink} to="/leaderboard">
              Leaderboard
            </Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>{loggedIn.name}</Navbar.Text>
            <Image
              src={loggedIn.avatarURL}
              roundedCircle
              fluid
              width="40"
              height="40"
              className="mx-3"
              alt="user avatar"
            />
            <Button
              variant="outline-dark"
              className="ml-3"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    loggedIn: users[authedUser],
  };
};

export default connect(mapStateToProps)(NavBar);
