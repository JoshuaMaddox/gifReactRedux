import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as giffyActions from '../actions/giffyActions'

class SingleGif extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    let gifs = <div></div>

    if(this.props.gif) {
      gifs = (
        <div className="gifContainer" key={gif.id}>
          <img src={gif.images.original} alt=""/>
          <p>Rating: {gif.rating}</p>
          <p>Slug: {gif.slug}</p>
          <p>Source: {gif.source}</p>
        </div>
      )
    }

    return(
      <div>
        <div className="giffyContainer">
        <h1>Gif</h1>
          {gifs}
        </div>
      </div>
    )
  }
}

//Choice made by the variable we declared in the root reducer
function mapStateToProps(state){
  console.log('I am state in SingleGif', state)
 return { 
    gif: state.gif
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(giffyActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleGif)