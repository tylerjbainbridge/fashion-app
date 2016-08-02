import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavLoggedIn extends Component {
  constructor(props){
    super(props);
    this.handleClick = props.onClick;
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
            <button onClick={() => this.handleClick()} className = 'NavBtn'>
              LOGOUT
            </button>
        </div>
     </div>
   )
  }
}
