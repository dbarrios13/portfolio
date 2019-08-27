import React, { Component } from 'react';
import './styles/index.sass';

// import components
import Welcome from './components/welcome/Welcome'
import Main from './components/Main/Main'

export default class App extends Component {
  state = {
    scroll: window.scrollY
  }

  handleScroll = () => {
    this.setState({
      scroll: window.scrollY
    })
  }

  render() {
    return (
      <div className="App" onScroll={this.handleScroll}>
        <Welcome />
        <Main scroll={this.state.scroll} />
      </div>
    );
  }
}