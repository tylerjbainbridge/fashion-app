import React, { PropTypes } from 'react';
import NavLoggedIn from './NavLoggedIn';
import NavNotLoggedIn from './NavNotLoggedIn';
// import Search from '../Search/SearchComponent';


function NavBar(props) {
  const { username, logout, clickLogin, url } = props;
  if (username) {
    return (
      <NavLoggedIn
        username={username}
        onClick={logout}
      />
   );
  }
  return (
    <NavNotLoggedIn
      onClick={clickLogin}
      url={url}
    />
  );
}

NavBar.propTypes = {
  username: PropTypes.string,
  logout: PropTypes.func.isRequired,
  clickLogin: PropTypes.func.isRequired,
  url: PropTypes.string,
};

export default NavBar;
