import React, { Component } from 'react';
import RegFormCont from '../containers/RegFormCont';
import LoginForm from '../containers/loginContainer';
import { Link } from 'react-router';

export default class App extends Component {
  render(){
    return (
      <div>
        <h1>App Component</h1>

        <button>
          <Link to='/login'>
            login
          </Link>
        </button>

        <button>
          <Link to='/register'>
            register
          </Link>
        </button>

      </div>
    )
  }
}
