import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <h1 style={{ 'textAlign': 'center' }} >Cannot find page.</h1>
    )
  };
};
