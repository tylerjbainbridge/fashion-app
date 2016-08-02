import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    // "home" page
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
              <Link to='/register'>
                Register
              </Link>
            </div>
          </div>
        </div>
      )
    } else {
      //  display the news feed component here.
      return (
        <h1>logged in</h1>
      )
    }

  };
};
