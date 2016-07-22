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
        <NavBar/>

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
          <NavBar/>
        </Row>

        <Row className="show-grid">
          <Col sm={6} smOffset={5}>
            <div className="titleFont">Styl</div>
          </Col>
        </Row>

        <br/>

        <Row className="show-grid">
          {this.props.children}
        </Row>

      </Grid>
    )
  }

  render(){
    if(this.props.userid == null){
      return this.displayNotLoggedIn();
    }else{
      return this.displayLoggedIn();
    }
  }
}
