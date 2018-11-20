import React, { Component } from 'react';
import resume from '../images/resume.jpg';
class Resume extends Component { 
    render() {
         
    return <div style={{ height:"-webkit-fill-availaible", marginLeft:"25%", marginRight:"25%"}} id='Resume' >   
        <a href={process.env.PUBLIC_URL + '/resume.pdf'}>
        <img className="z-depth-1" src={resume} alt="My Resume" style={{height:"100%", width:"100%"}}/>
        </a>
    </div>
    }
}

export default Resume;