import React, { Component } from 'react';
import './App.css';
import Blog from './container/Blog';
import NavigationBar from './component/Navbar';
import { connect } from 'react-redux';
import About from './container/About';
import Projects from './container/Projects';

class App extends Component {
  constructor(props) {
    super(props)
    this.scrollRef = React.createRef()

  }

  render() {

    return (
      <div>
        <NavigationBar scrollRef={this.scrollRef} />
        <div id="wrapper" ref={this.scrollRef} style={{overflowY:"auto"}}>
          <About style={{marginTop:"5%"}}/>
          <Projects />
          <Blog />
        </div>
      </div>
    );
  }
}

export default App;
