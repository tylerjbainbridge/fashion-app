import React, { Component, PropTypes } from 'react';
import { Grid, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBarContainer';

class App extends Component {

  componentDidMount() {
    if (!this.props.userid) {
      this.props.getLoggedUser();
    }
  }

  displayLoggedIn() {
    return (
      <div
        style={{
          paddingTop: '50px',
        }}
      >
        <NavBar url={this.props.location.pathname} />
        <div
          className="content"
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  displayNotLoggedIn() {
    return (
      <div
        style={{
          paddingTop: '50px',
        }}
      >
        <NavBar url={this.props.location.pathname} />
        <div
          style={{
            float: 'left',
          }}
        >
        {this.props.children}
        </div>
      </div>
    );
  }

  displayHomePage() {
    return (
      <Grid>
        <Row>
          <div className="titleFont">Styl</div>
        </Row>
        <Row className="show-grid">
          { this.props.children }
        </Row>
      </Grid>
    );
  }

  isHome() {
    if (this.props.location.pathname === '/') {
      return true;
    } else if (this.props.location.pathname === '/login') {
      return true;
    } else if (this.props.location.pathname === '/register') {
      return true;
    }
    return false;
  }

  render() {
    if (this.isHome() && !this.props.userid) {
      return this.displayHomePage();
    } else if (!this.props.userid) {
      return this.displayNotLoggedIn();
    }
    return this.displayLoggedIn();
  }
}

App.propTypes = {
  userid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.null,
  ]),
  getLoggedUser: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default App;
