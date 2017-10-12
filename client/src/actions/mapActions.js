import * as types from './actionTypes';

export function updateLatLng(lat, lng) {
  return {type: types.UPDATE_LAT_LNG, positions: {lat: lat, lng: lng}  }
}

export function addLikes(leadSiteIndex, likes) {
  return {type: types.ADD_LIKES, data: {i: leadSiteIndex, l: likes}}
}

export function addDislikes() {
  return {type: types.ADD_DISLIKES}
}

export function loadLocations(locations) {
  return {type: types.LOAD_LOCATIONS, locations: locations}
}
