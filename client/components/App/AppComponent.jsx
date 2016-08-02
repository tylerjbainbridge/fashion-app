import React, { Component } from 'react';
import { Link } from 'react-router';
import NavBar from '../NavBar/NavBarContainer';
import { Grid, Row, Col } from 'react-bootstrap';

export default class App extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(this.props.userid == null){
      this.props.getLoggedUser();
    }
  }

  displayLoggedIn(){
    return(
      <div>
        <Row>
          <NavBar url={this.props.location.pathname}/>
        </Row>
        <Row className="show-grid">
          {this.props.children}
        </Row>
      </div>
    )
  }

  displayNotLoggedIn(){
    return (
      <Grid>

        <Row>
          <NavBar url={this.props.location.pathname}/>
        </Row>

        <br/>

        <Row className="show-grid">
          {this.props.children}
        </Row>

      </Grid>
    )
  }

  displayHomePage () {
    return (
      <Grid>

        <Row>
          <div className="titleFont">Styl</div>
        </Row>

        <Row className="show-grid">
          {this.props.children}
        </Row>

      </Grid>
    )
  }

  isHome () {
    if (this.props.location.pathname === '/') {
      return true;
    } else if (this.props.location.pathname === '/login') {
      return true;
    } else if (this.props.location.pathname === '/register') {
      return true;
    } else {
      return false;
    }
  }

  render () {
    if (this.isHome() && this.props.userid == null ) {
      return this.displayHomePage();
    } else if (this.props.userid == null) {
      return this.displayNotLoggedIn();
    } else {
      return this.displayLoggedIn();
    }
  }
}
