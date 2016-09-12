import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function unLoggedHomePage() {
  return (
    <div className="parentLogin">
      <div className="childHome">
        <div className="homeLink">
          <Link to="/login">
            Login
          </Link>
        </div>
        <div className="homeLink">
          <Link to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

function loggedHomePage() {
  return (
    <h1 style={{ textAlign: 'center' }}>logged in at home page</h1>
  );
}

//  Home Component.
const Home = (props) => {
  const { userid } = props;
  //  if the user is not logged in display the default home page.
  //  else show them the soon to be 'feed'
  if (!userid) {
    return unLoggedHomePage();
  } else if (userid) {
    return loggedHomePage();
  }

  return (<p>Something went wrong.</p>);
};

Home.propTypes = {
  userid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.null,
  ]),
};

export default Home;
