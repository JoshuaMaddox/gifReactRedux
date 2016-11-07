import * as types from '../actions/actionTypes'

export default function gifReducer(state = null, action) {
  switch(action.type) {
    case types.RECEIVE_ONE_GIF:
      return action.gif
    default:
      return state
  }
}