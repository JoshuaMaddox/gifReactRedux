import * as types from './actionTypes'
import axios from 'axios'

export function incrementNumber(count) {
  return { type: types.INCREMENT_COUNT, count}
}

export function decrementNumber(count) {
  return { type: types.DECREMENT_COUNT, count}
}

export function receiveForm(formObj) {
  return { type: types.RECEIVE_FORM, formObj}
}

export function deleteUser(id) {
  return { type: types.DELETE_USER, id}
}


function receiveGiffies(giffies) {
  return {
    type: types.RECEIVE_GIFFIES,
    payload: giffies
  }
}

function receiveOneGif(gif) {
  return { type: types.RECEIVE_ONE_GIF, gif}
}

function fetchGiffiesError(err) {
  return {
    type: types.FETCH_GIFFIES_ERROR,
    payload: err
  }
}


export function fetchGiffy(searchString) {
  let newSearchString = searchString.split('').join('+')
  return dispatch => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${newSearchString}&api_key=dc6zaTOxFJmzC`)
      .then(res => res.data)
      .then(giffies => {
        console.log(giffies)
        dispatch(receiveGiffies(giffies.data))
      })
      .catch(err => {
        dispatch(fetchGiffiesError(err))
      })
  }
}

export function getOneGif(id) {
  return dispatch => {
    axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=dc6zaTOxFJmzC`)
      .then(gif => {
        console.log('I am the single gif', gif.data.data)
        dispatch(receiveOneGif(gif.data.data))
      })
      .catch(err => {
        dispatch(fetchGiffiesError(err))
      })
  }
}

export function ratingFilter(rating) {
  return { type: types.FILTER_RATING, rating}
}