import { isAlphanumeric, isAlpha, isLength, isEmail } from 'validator';

export const validateRegistration = (type, value) => {
  switch (type) {

    case 'USERNAME':
      if(typeof value != 'string')
        return false
      if(value == '')
        return 'Username required.'
      if(!isAlphanumeric(value))
        return 'Username must be alphanumeric.'
      if(!isLength(value, {min:3, max: 20}))
        return 'Username must be within [3-20] characters.'
      else
        return false;

    case 'FIRST_NAME':
      if(value == '')
        return 'First name required.'
      if(!isAlpha(value))
        return 'First name must be only contain letters [A-Z]'
      if(!isLength(value, {min:1, max: 30}))
        return 'First name must be within [1-30] characters.'
      else
        return false;

    case 'LAST_NAME':
      if(value == '')
        return 'Last name required.'
      if(!isAlpha(value))
        return 'Last name must be only contain letters [A-Z]'
      if(!isLength(value, {min:1, max: 30}))
        return 'Last name must be within [1-30] characters.'
      else
        return false;

    case 'EMAIL':
      if(value == '')
        return 'Email required.'
      if(!isEmail(value))
        return 'Invalid email.'
      else
        return false;

    case 'PASSWORD':
      if(typeof value != 'string')
        return false
      if(value == '')
        return 'Password required.'
      if(!isLength(value, {min:5}))
        return 'Password must be at least five characters.'
      else
        return false;

    default:
      return false;
  }
}
