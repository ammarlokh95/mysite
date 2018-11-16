import React, { Component } from 'react';
import resume from '../images/resume.jpg';
class Resume extends Component { 
    render() {
         
    return <div style={{width:"80%", height:"-webkit-fill-availaible", margin:"5%", marginLeft:"20%"}} id='Resume' >   
        <a href={process.env.PUBLIC_URL + '/resume.pdf'}>
        <img className="z-depth-1" src={resume} alt="My Resume" style={{height:"1000px", width:"600px"}}/>
        </a>
    </div>
    }
}

export default Resume;