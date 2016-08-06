import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class NavNotLoggedIn extends Component {
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
          <button onClick={() => this.handleClick(this.props.url)} className="NavBtn">
           LOGIN
          </button>
          <Link to="/register" className="NavBtn">
            CREATE
          </Link>
        </div>
      </div>
   );
  }
}

NavNotLoggedIn.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavNotLoggedIn;
