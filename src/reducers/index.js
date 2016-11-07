import { combineReducers } from 'redux'
import giffies from './giffyReducer'
import gif from './gifReducer'

const rootReducer = combineReducers({
  giffies,
  gif
})

export default rootReducer