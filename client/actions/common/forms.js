export const clearFormState = (type) => {
  return {
    type: `CLEAR_${type}_FORM`
  }
}

export const endSubmit = (type) => {
  return {
    type: `END_${type}_SUBMIT`
  }
}

export const setSubmittingForm = (type) => {
  return {
    type: `SUBMIT_${type}_FORM`
  }
}

export const regFieldSuccess = (type) => {
  return {
    type: `SUCCESS_${type}`
  }
}

export const regFieldError = (type, message) => {
  return {
    type: `ERROR_${type}`,
    message
  }
}

export const loginUser = ({ username, _id }) => {
  return {
    type: "LOG_IN",
    user: {
      username,
      userid: _id
    }
  }
};
