import * as types from '../actions/actionTypes'

export default function formReducer(state = [], action) {
  switch(action.type){
    case types.RECEIVE_FORM:
      return [...state, Object.assign({}, action.formObj)]
    case types.DELETE_USER:
      return [...state.filter(user => user.id !== action.id)]
    default:
      return state
  }
}