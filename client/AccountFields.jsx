// file: AccountFields.jsx

import React from 'react';

var AccountFields = React.createClass({
  render: function() {
    return ( <div>
      <label>Name</label>
      <input type="text"
             ref="name"
             defaultValue={ this.props.fieldValues.name } />

      <label>Password</label>
      <input type="password"
             ref="password"
             defaultValue={ this.props.fieldValues.password } />

      <label>Email</label>
      <input type="email"
             ref="email"
             defaultValue={ this.props.fieldValues.email } />

      <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.getDOMNode().value,
      password : this.refs.password.getDOMNode().value,
      email    : this.refs.email.getDOMNode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = AccountFields
