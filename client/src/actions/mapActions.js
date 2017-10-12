import * as types from './actionTypes';

export function updateLatLng(lat, lng) {
  return {type: types.UPDATE_LAT_LNG, positions: {lat: lat, lng: lng}  }
}

export function addLikes(constantIndex) {
  console.log("add likes logged");
  return dispatch => {
    var url = '/lead_sites/' + (constantIndex + 1)
    return fetch(url, {
      method: 'PATCH',
    })
    .then(response => {
      return response.json();
    }).then(leadSite => {
      return dispatch(addLikeSuccess(leadSite))
    })
  }
}

function addLikeSuccess(leadSite){
  return {type: types.ADD_LIKES, leadSite: leadSite}
}

export function addDislikes() {
  return {type: types.ADD_DISLIKES}
}

export function loadLocations(data) {
  return {type: types.LOAD_LOCATIONS, data: data}
}
