import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLoggedIn from './NavLoggedIn';
import NavNotLoggedIn from './NavNotLoggedIn';
// import Search from '../Search/SearchComponent';


class NavBar extends Component {
   constructor(props) {
     super(props);
   };

   render() {
     if (this.props.username) {
       return (
         <NavLoggedIn
           username={this.props.username}
           onClick={this.props.logout}
         />
       )
     } else {
       return (
         <NavNotLoggedIn
           onClick={this.props.clickLogin}
           url={this.props.url}
         />
       )
     }
   };
}


export default NavBar;
