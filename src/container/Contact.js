import React, { Component } from 'react';


class ContactMe extends Component { 
    render() {
         
    return <div style={{height:"100%"}} >
    {/* eslint-disable react/jsx-no-target-blank */}
        <div id='Contact' className="container-fluid z-depth-1" style={{width:"60vh"}}>
                <h3>Contact:</h3>
                <ul style={{listStyle:"None"}}>
                <li>
                <a href="mailto:ammar.lokh1234@gmail.com" target="_blank" >
                <i className="fa fa-envelope" aria-hidden="true"></i>
                &nbsp;&nbsp;
                ammar.lokh1234@gmail.com</a> 
                </li>
                <li id="LinkedIn">
                <a href="https://www.linkedin.com/in/ammarl123/" target="_blank" >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                &nbsp;&nbsp;LinkedIn
                </a>                            
                </li>
                <li id="GitHub">
                <a href="https://github.com/ammarlokh95" target="_blank" > 
                <i className="fa fa-github" aria-hidden="true"></i>
                &nbsp;&nbsp;GitHub
                </a>                           
                </li>
                <li id="Twitter">
                <a href="https://twitter.com/ammarlokh" target="_blank"  > 
                <i className="fa fa-twitter" aria-hidden="true"></i>
                &nbsp;&nbsp;Twitter
                </a>                           
                </li>
                <li id="Angel">
                <a href="https://angel.co/ammar-lokhandwala-1" target="_blank" > 
                <i className="fa fa-angellist" aria-hidden="true"></i>
                &nbsp;&nbsp;Angel List
                </a>                           
                </li>
            </ul>
            <br ></br>
    {/* eslint-enable react/jsx-no-target-blank */}
    </div>
    </div>
    }
}

export default ContactMe;