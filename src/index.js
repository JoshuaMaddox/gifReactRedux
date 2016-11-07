import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import routes from './routes'
import Layout from './components/Layout'

const store = configureStore()


render(
  <Provider store={ store }>
    <Router history = { browserHistory } routes={routes} />
  </Provider>,
  document.getElementById('root')
)