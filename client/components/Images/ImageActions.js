import request from 'superagent';
import { push } from 'react-router-redux';

export function updateImage(image) {
  return {
    type: 'UPDATE_IMAGE',
    image,
  }
}

export function updateCrop(crop) {
  return {
    type: 'UPDATE_CROP',
    crop,
  }
}
