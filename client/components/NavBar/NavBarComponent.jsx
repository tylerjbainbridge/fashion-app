import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLoggedIn from './NavLoggedIn';
// import Search from '../Search/SearchComponent';


class NavBar extends Component {
   constructor(props) {
     super(props);
   }

   render() {
     if(this.props.username && this.props.logout) {
       return (
         <NavLoggedIn
           username={this.props.username}
           onClick={this.props.logout}
         />
       )
     }else{
       return <notLoggedIn />
     }
   }
 }

 class notLoggedIn extends Component {
   constructor(props){
     super(props)
   }

   render(){
    return (
      <div className = 'Nav'>
        <div className = 'NavLeft'>
          <span>Styl</span>
        </div>
        <div className = 'NavRight'>
             <Link to= {`/u/${this.props.username}`} className = 'NavBtn'>
               { this.props.username.toUpperCase() }
             </Link>
             <a onClick={this.props.onClick()} className = 'NavBtn'>
               LOGOUT
             </a>
         </div>
      </div>
    )
   }
 }


export default NavBar;
