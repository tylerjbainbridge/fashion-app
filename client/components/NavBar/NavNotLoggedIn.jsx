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
           STYL
          </Link>
        </div>
        <div className="NavRight">
          <ul>
            <li>
              <a onClick={() => this.handleClick(this.props.url)} className="NavBtn">
               LOGIN
              </a>
            </li>
            <li>
              <Link to="/register" className="NavBtn">
                CREATE
              </Link>
            </li>
          </ul>
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
