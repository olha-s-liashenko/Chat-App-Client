import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from "./components/Chat";
import { Navbar, Nav } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="light">
          <Navbar.Brand href="/">Chat APP</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="/">
                  Chat
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/" component={Chat} exact/>
          <Route path="/chat" component={Chat} exact/>
        </Switch>
        </Router>
          
      );
    }
}

export default App;
