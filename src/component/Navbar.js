import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';

class NavigationBar extends Component { 
    
    constructor(props) {
        super(props)
        this.scrollToMyRef = this.scrollToMyRef.bind(this)
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToMyRef = this.scrollToMyRef.bind(this);
    }
    componentDidMount() {
        
        
      }
      componentWillUnmount() {
      }
    
      handleScroll() {
        
    }

    scrollToMyRef(ref, id) {
        console.log(id)
        window.scrollTo({
            top:ref.offsetTop, 
            behavior: "smooth"
        })
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
          });
      }
    render() {
        const bgcyan = {backgroundColor: '#33b5e5'}
        return(
            <Navbar style={bgcyan} dark expand="md" scrolling fixed="top">
            <NavbarBrand href="/">
                <strong>Ammar's Website</strong>
            </NavbarBrand>
            <NavbarToggler onClick={ this.onClick } />
            <Collapse isOpen = { this.state.collapse } navbar>
                <NavbarNav left>
                    <NavItem id='ABOUT' >
                        <a className='nav-link' onClick={() => this.scrollToMyRef(this.props.scrollRef.current)}>About</a>
                    </NavItem>
                    <NavItem id='PROJECTS'>
                        <a className='nav-link' onClick={() => this.scrollToMyRef(this.props.scrollRef.current.children[1])}>Projects</a>
                    </NavItem>
                    <NavItem id='BLOG'>
                        <a className='nav-link' onClick={() => this.scrollToMyRef(this.props.scrollRef.current.children[2])}>Blog</a>
                    </NavItem>
                </NavbarNav>
                <NavbarNav right className='nav-flex-icons'>
                    <NavItem>
                        <a className='nav-link' href="https://www.linkedin.com/in/ammarl123/"><Fa icon="linkedin" /></a>
                    </NavItem>
                    <NavItem>
                        <a className='nav-link' href="https://github.com/ammarlokh95"><Fa icon="github" /></a>
                    </NavItem>
                    <NavItem>
                        <a className='nav-link' href="https://twitter.com/ammarlokh"><Fa icon="twitter" /></a>
                    </NavItem>
                    <NavItem>
                        <a className='nav-link' href="https://angel.co/ammar-lokhandwala-1"><Fa icon="angellist" /></a>
                    </NavItem>
                </NavbarNav>
                </Collapse>

            </Navbar>

        );
    }
}

export default NavigationBar;