import * as types from './actionTypes';

export function updateLatLng(lat, lng) {
  return {type: types.UPDATE_LAT_LNG, positions: {lat: lat, lng: lng}  }
}
