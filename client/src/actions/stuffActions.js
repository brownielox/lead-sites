import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function updateLatLng(lat, lng) {
  return {type: "UPDATE_LAT_LNG", positions: {lat: lat, lng: lng}  }
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json.stuff};
}

export function fetchStuff() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    })
    .then(response => response.json())
    .then(json => dispatch(receiveStuff(json)));
  };
}
