import React, { Component } from 'react';
import './css/App.css';
import ContactMe from './container/Contact';
import NavigationBar from './component/Navbar';
import About from './container/About';
import Projects from './container/Projects';
import Resume from './container/Resume';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayContainer: <Projects />,
      id: 0
    }
    this.scrollToMyRef = this.scrollToMyRef.bind(this);
  }

  idToComponent = {
    0:<div key="Project"><Projects /></div>,
    1:<div key="About"><About /></div>,
    2:<div key="Resume"><Resume /></div>,
    3:<div key="Contact"><ContactMe /></div>
  }
  scrollToMyRef(id) {
    if(id!==this.state.id) {
      setTimeout(() => this.setState({
        displayContainer:this.idToComponent[id],
        id:id
      }),600);   
      
      
      this.setState({
        displayContainer:null,
        id:id
      }) 
  }
}
  render() {
    return (
      <div className="global-container">
        <div style={{paddingBottom:"12vh"}}>
          <NavigationBar scrollTo={this.scrollToMyRef}/>
        </div>
        <div id="wrapper">
          <div className="section-container" >
          <ReactCSSTransitionGroup
            transitionName="switch"
            transitionLeaveTimeout={500}
            transitionEnterTimeout={500}
            >

            {this.state.displayContainer}        
          
          </ReactCSSTransitionGroup>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
