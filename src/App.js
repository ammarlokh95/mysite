import React, { Component } from 'react';
import './App.css';
import ContactMe from './container/Contact';
import NavigationBar from './component/Navbar';
import About from './container/About';
import Projects from './container/Projects';
import Resume from './container/Resume';
class App extends Component {
  constructor(props) {
    super(props)
    this.scrollRef = React.createRef()

  }

  render() {

    return (
      <div>
        <NavigationBar scrollRef={this.scrollRef} />
        <div id="wrapper" ref={this.scrollRef} style={{overflowY:"auto", listStyle:"None"}}>
          <div>
          <About style={{marginTop:"5%"}}/>
          </div>
          <div >
          <Projects />
          </div>
          <div>
            <Resume />
          </div>
          <div>
          <ContactMe />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
