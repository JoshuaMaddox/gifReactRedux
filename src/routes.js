import React from 'react'
import { Route, IdexRoute } from 'react-router'
import Layout from './components/Layout'
import GiffyPage from './components/GiffyPage'
import SingleGif from './components/SingleGif'

export default (
  <Route path="/" component={Layout}>
    <Route path="gif/:id" component={SingleGif} />
  </Route>
)