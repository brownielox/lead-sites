import * as types from './actionTypes';

export function updateLatLng(lat, lng) {
  return {type: types.UPDATE_LAT_LNG, positions: {lat: lat, lng: lng}  }
}

export function addLikes() {
  return {type: types.ADD_LIKES}
}

export function addDislikes() {
  return {type: types.ADD_DISLIKES}
}
