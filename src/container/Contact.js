import React, { Component } from 'react';


class ContactMe extends Component { 
    render() {
         
    return <div id='Contact' className="container-fluid z-depth-1" >
                <h3>Contact:</h3>
                <ul style={{listStyle:"None"}}>
                <li>
                <a href="mailto:ammar.lokh1234@gmail.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                &nbsp;&nbsp;
                ammar.lokh1234@gmail.com</a> 
                </li>
                <li id="LinkedIn">
                <a href="https://www.linkedin.com/in/ammarl123/" >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
                &nbsp;&nbsp;LinkedIn
                </a>                            
                </li>
                <li id="GitHub">
                <a href="https://github.com/ammarlokh95" > 
                <i className="fa fa-github" aria-hidden="true"></i>
                &nbsp;&nbsp;GitHub
                </a>                           
                </li>
                <li id="Twitter">
                <a href="https://twitter.com/ammarlokh" > 
                <i className="fa fa-twitter" aria-hidden="true"></i>
                &nbsp;&nbsp;Twitter
                </a>                           
                </li>
                <li id="Angel">
                <a href="https://angel.co/ammar-lokhandwala-1" > 
                <i className="fa fa-angellist" aria-hidden="true"></i>
                &nbsp;&nbsp;Angel List
                </a>                           
                </li>
            </ul>
    </div>
    }
}

export default ContactMe;