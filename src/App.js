import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideoRequest} from './actions/video-actions'
import ListItem from './components/ListItem'

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.getVideoRequest()
  }

  render() {
    const { props } = this
    const { video = {} } = props
    const videoData = video && video.data
    const videoProcessing = video && video.processing
    const videoError = video && video.error

    console.log('App Render') // please leave this log statement

    return (
      <div className="app">
        <header className="app__header">
          
          
        </header>
        <div className="app__body">
        <ListItem
        data={videoData}
        />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.video,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVideoRequest: () => dispatch(getVideoRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
