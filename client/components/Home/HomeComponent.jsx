import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    // "home" page
    const { backToStepOne } = this.props;
    if (!this.props.userid) {
      return (
        <div className="parentLogin">
          <div className="childHome">
            <div className="homeLink">
              <Link to='/login'>
                Login
              </Link>
            </div>
            <div className="homeLink">
              <Link to='/register' onClick={() => backToStepOne()}>
                Register
              </Link>
            </div>
          </div>
        </div>
      )
    } else {
      //  display the news feed component here.
      return (
        <h1 style={{ 'textAlign': 'center' }} >logged in at home page</h1>
      )
    }

  };
};
