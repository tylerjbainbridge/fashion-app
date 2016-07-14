import { isAlphanumeric, isLength } from 'validator';

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

    case 'PASSWORD':
      if(typeof value != 'string')
        return false
      if(value == '')
        return 'Password required.'
      if(!isLength(value, {min:5, max: 'undefined'}))
        return 'Password must be at least five characters.'
      else
        return false;

    default:
      return false;
  }
}
