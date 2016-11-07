import * as types from '../actions/actionTypes'

export default function giffyReducer(state = null, action) {
  switch(action.type) {
    case types.RECEIVE_GIFFIES:
      console.log('I am giffies', action.payload)
      return action.payload
    case types.FILTER_RATING:
      let stateToFilter = state
      return [...stateToFilter.filter(gif => gif.rating === action.rating)]
    default:
      return state
  }
}