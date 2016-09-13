import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class NavLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.handleClick = props.onClick;
  }

  render() {
    return (
      <div className="Nav">
        <div className="NavLeft">
          <Link to="/">
           STYL
          </Link>
        </div>
        <ul className="NavRight">
          <li>
            <Link to={`/u/${this.props.username}`} className="NavBtn">
              { this.props.username.toUpperCase() }
            </Link>
          </li>
          <li>
            <Link to="/uploadfit" className="NavBtn">
              UPLOAD FIT
            </Link>
          </li>
          <li>
            <Link to="/uploadprofilePicture" className="NavBtn">
              UPLOAD PROPIC
            </Link>
          </li>
          <li>
            <a onClick={() => this.handleClick()} className="NavBtn">
              LOGOUT
            </a>
          </li>
        </ul>
      </div>
   );
  }
}

NavLoggedIn.propTypes = {
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavLoggedIn;
