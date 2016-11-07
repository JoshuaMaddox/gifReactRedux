import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import * as giffyActions from '../actions/giffyActions'
import SingleGif from './SingleGif'
import uuid from 'uuid'

class GiffyPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifResults: this.props.giffies,
      filterRating: null
    }

    this.sendSearch = this.sendSearch.bind(this)
    this.filterRating = this.filterRating.bind(this)
    this.getOneGif = this.getOneGif.bind(this)
  }

  filterRating(e) {
    e.preventDefault()
    const { rating } = this.refs
    let filterRating = rating.value
    this.setState({
      filterRating
    })
  }

  getOneGif(e) {
    let id = e.target.id
    console.log('I am id ', id)
    this.props.actions.getOneGif(id)
    browserHistory.push(`/gif/${id}`)
  }

  sendSearch(e){
    e.preventDefault()
    const { searchQuery } = this.refs
    let search = searchQuery.value
    this.props.actions.fetchGiffy(search)
  }

  render(){
    let gifs = <div></div>
    if(this.props.form) {
      console.log(this.props.form)
    }
    if(this.props.giffies) {
    gifs = this.props.giffies.map((gif, i) => {
              return(
                <div className="gifContainer" key={gif.id}>
                  <img src={gif.images.fixed_width.url} alt=""/>
                  <p>{gif.rating}</p>
                  <button id={gif.id} onClick={this.getOneGif}>Single Me Out</button>
                </div>
              )
            })
    }

    if(this.state.filterRating) {
      console.log("I am filterRating", this.state.filterRating)
      let newGiffies = this.props.giffies
      let filteredGiffies = newGiffies.filter(gif => gif.rating === this.state.filterRating)
      gifs = filteredGiffies.map((gif, i) => {
              return(
                <div className="gifContainer" key={gif.id}>
                  <img src={gif.images.fixed_width.url} alt=""/>
                  <p>{gif.rating}</p>
                  <button id={gif.id} onClick={this.getOneGif}>Single Me Out</button>
                </div>
              )
            })
    }

  
    return(
      <div className='mainContainer'>
      <form onSubmit={this.sendSearch}>
        <input ref='searchQuery' type="text" placeholder='searchQuery'/>
        <button type='submit'>submit</button> 
      </form>
       <form onSubmit={this.filterRating}>
        <label>Filter By Rating</label>
        <select ref='rating'>
          <option  value="y">y</option>
          <option  value="g">g</option>
          <option  value="pg">pg</option>
          <option  value="pg-13">pg-13</option>
          <option value="r">r</option>
        </select>
        <button type='submit'>filter</button> 
      </form>
      <div className="giffyContainer">
        {gifs}
      </div>
      </div>
    )
  }
}

//Choice made by the variable we declared in the root reducer
function mapStateToProps(state){
  console.log('i am state: ', state)
 return { 
    giffies: state.giffies, 
    gif: state.gif
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(giffyActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiffyPage)
