export function imageLoading() {
  return {
    type: 'LOADING',
  };
}

export function imageLoaded() {
  return {
    type: 'LOADED',
  };
}

export function imageError() {
  return {
    type: 'ERROR',
  };
}

export function clear() {
  return {
    type: 'CLEAR',
  };
}

export function openModal() {
  return {
    type: 'OPEN_UPLOAD_PROPIC_MODAL',
  };
}

export function closeModal() {
  return {
    type: 'CLOSE_UPLOAD_PROPIC_MODAL',
  };
}
