import React, { Component } from 'react'
import Collection from './Collection'
import { connect } from 'react-redux'
import { getCollections } from '../actions/index.js'


class Collections extends Component {

  componentDidMount() {
    debugger
    this.props.getCollections()
  }

  render(){
    return (
      <div>
      {this.props.collections.map((c, id) => < Collection key={id} collection={c} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    collections: state.collections
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCollections: () => dispatch(getCollections())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Collections)
