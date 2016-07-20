import React, { Component } from 'react';
import { Link } from 'react-router';
// import Search from '../Search/SearchComponent';

class NavBar extends Component {
   constructor(props){
     super(props);
   }

   loggedInNavBar(){
     return (
       <div className = 'Nav'>
         <div className = 'NavLeft'>
           <span>Styl</span>
         </div>
         <div className = 'NavRight'>
              <Link to= {`/u/${this.props.username}`} className = 'NavBtn'>
                { this.props.username.toUpperCase() }
              </Link>
              <Link to='/login' className = 'NavBtn'>
                LOGOUT
              </Link>
          </div>
       </div>
     )
   }

   notLoggedInNavBar(){
     return (
       <div className = 'Nav'>
         <div className = 'NavLeft'>
           <span>Styl</span>
         </div>
         <div className = 'NavRight'>
           <Link to='/login' className = 'NavBtn'>
             LOGIN
           </Link>
           <Link to='/register' className = 'NavBtn'>
             REGISTER
           </Link>
         </div>
       </div>
     )
   }

   render(){
     if(this.props.username){
       return this.loggedInNavBar();
     }else{
       return this.notLoggedInNavBar();
     }
   }
 }

export default NavBar;
