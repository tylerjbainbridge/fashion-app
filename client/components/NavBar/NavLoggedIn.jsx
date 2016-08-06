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
           Styl
          </Link>
        </div>
        <div className="NavRight">
          <Link to={`/u/${this.props.username}`} className="NavBtn">
            { this.props.username.toUpperCase() }
          </Link>
          <button onClick={() => this.handleClick()} className="NavBtn">
            LOGOUT
          </button>
        </div>
      </div>
   );
  }
}

NavLoggedIn.propTypes = {
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavLoggedIn;
