import React, { Component } from 'react';
import persontemp from '../images/persontemp.png';
class About extends Component {
    render() {
        return <div className='container-fluid' style={{ height:"-webkit-fill-available"}}>
                <div className="container-fluid" style={{marginTop:"5%", width:"90%"}} >
                    <div className="media">
                        <img className="avatar align-self-top mt-4 mr-3 z-depth-1" src={persontemp} alt="Placeholder" height="200px" width="200px"/>
                    <div className="media-body mt-2 mb-3">
                        <div className="container-fluid z-depth-1">
                        <h1 className="mt-0 font-weight-bold">Ammar Lokhandwala</h1>
                        <h3>Software Developer</h3>
                        <h5>
                            Hi! I am a recent graduate of Drexel University with a degree in Computer Science. I am actively seeking a full-time job opportunity as a software developer. 
                            I am a hard working and ambitious person who is quick and willing to pick up new technologies and learn new skills. I am always looking to better myself at what I do and hope to use my technological skills to help make the world a better place to live in!
                            <br /><br />
                            Apart from software development, I'm very passionate about music, travelling and I enjoy reading. I also subscribe to a healthy, clean lifestyle and I am an avid bicyclist.
                        </h5>
                        <br/>
                        </div>
                        <br></br>
                        <div className="container-fluid z-depth-1">
                        <h2>Social Media Links:</h2>
                        <ul style={{listStyle:"None"}}>
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
                        <br />
                        </div>
                        <br />
                        <div className="container-fluid z-depth-1">
                        <h2>Contact:</h2>
                        <ul style={{listStyle:"None"}}>
                        <li>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        &nbsp;&nbsp;
                        <a href="mailto:ammar.lokh1234@gmail.com">ammar.lokh1234@gmail.com</a> 
                        </li>
                        </ul>
                        <br></br>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    }
}

export default About;