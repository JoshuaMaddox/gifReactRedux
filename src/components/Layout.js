import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as giffyActions from '../actions/giffyActions'
import GiffyPage from './GiffyPage'

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      someKey: []
    }
  }

  render() {

    return (
      <div>
        <h1>Giffy Finder</h1>
        <GiffyPage />
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
