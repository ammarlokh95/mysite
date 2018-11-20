import React, { Component } from 'react';
import { Navbar, NavbarNav, NavbarToggler, Collapse, NavItem, Fa } from 'mdbreact';

class NavigationBar extends Component { 
    
    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
        };
        this.onClickToggler = this.onClickToggler.bind(this);
        this.onClickLink = this.onClickLink.bind(this); 
        this.isActive = this.isActive.bind(this);
    }

    onClickToggler(){
        this.setState({
            collapse: !this.state.collapse,
          });
      }

    onClickLink(id) {
        this.props.scrollTo(id);
        if(this.state.collapse === true)
            this.onClickToggler();
    }
    isActive(id) {
        if (this.state.activeLink === id)
            return NavItem.active
        else return null
    }
    render() {
        const bgcyan = {backgroundColor: '#33b5e5'}
        return(
            <Navbar style={bgcyan} dark expand="md" scrolling fixed="top">
            <a className="navbar-brand" href="/">
                <strong>Ammar's Website</strong>
            </a>
            <NavbarToggler onClick={ this.onClickToggler } />
            <Collapse isOpen = { this.state.collapse } navbar>
                <NavbarNav left>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                    <NavItem id='PROJECTS' >
                        <a className='nav-link' onClick={() => {
                            this.onClickLink(0);
                        }}>Projects</a>
                    </NavItem>
                    <NavItem id='ABOUT' >
                        <a className='nav-link' onClick={() => {
                            this.onClickLink(1);
                        }}>About Me</a>
                    </NavItem>
                    <NavItem id='RESUME' >
                        <a className='nav-link' onClick={() => {
                            this.onClickLink(2);
                        }}>Resume</a>
                    </NavItem>
                    <NavItem id='CONTACT' >
                        <a className='nav-link' onClick={() => {
                            this.onClickLink(3);
                        }}>Contact Me</a>
                    </NavItem>
                    {/* eslint-enable jsx-a11y/anchor-is-valid */}

                </NavbarNav>
                <NavbarNav right className='nav-flex-icons'>
                    {/* eslint-disable react/jsx-no-target-blank */}
                    <NavItem>
                        <a className='nav-link' target="_blank" href="https://www.linkedin.com/in/ammarl123/"><Fa icon="linkedin" /></a>
                    </NavItem>
                    <NavItem>
                        <a className='nav-link' target="_blank" href="https://github.com/ammarlokh95"><Fa icon="github" /></a>
                    </NavItem>
                    <NavItem>
                        <a className='nav-link' target="_blank" href="https://twitter.com/ammarlokh"><Fa icon="twitter" /></a>
                    </NavItem>
                    <NavItem>
                        <a className='nav-link' target="_blank" href="https://angel.co/ammar-lokhandwala-1"><Fa icon="angellist" /></a>
                    </NavItem>
                    {/* eslint-enable react/jsx-no-target-blank */}
                </NavbarNav>
                </Collapse>

            </Navbar>

        );
    }
}

export default NavigationBar;