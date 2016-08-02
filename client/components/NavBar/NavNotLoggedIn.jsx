import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavNotLoggedIn extends Component {
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
         <button onClick={() => this.handleClick(this.props.url)} className = 'NavBtn'>
           LOGIN
         </button>
          {/*<Link to='/login' className = 'NavBtn'>
            LOGIN
          </Link>*/}
          <Link to='/register' className = 'NavBtn'>
            LOGOUT
          </Link>
        </div>
     </div>
   )
  }
}
