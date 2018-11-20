import React, { Component } from 'react';
import display from '../images/display.jpg';
import {Media} from 'mdbreact';
class About extends Component {
    render() {
        return (
                <div className="container-fluid" style={{width:"90%"}} >
                        <div className="container-fluid z-depth-1">
                        <Media>
                            <Media left top>
                                <Media object className="align-self-top mt-4 mr-3 z-depth-1" src={display} alt="Personal" style={{maxHeight:"200px", height:"100%", maxWidth:"200px", width:"100%"}} />
                            </Media> 
                            <Media body>             
                                <h1 className="mt-0 font-weight-bold">Ammar Lokhandwala</h1>
                                <h3>Software Developer</h3>
                                <h5>
                                    I am a full-stack web Developer with a passion for playing with new technologies! I strive to
                                    find ways in which I can learn and grow as a developer and, in the process, get a better understanding of this insane, dynamic and exciting
                                    field I am a part of. I am always looking for work and projects that would positively impact the world!
                                    <br /><br />
                                    Beyond technology, I am also passionate about music and Philosophy. I aspire to adopt lessons and ethics learnt in these three vastly different
                                    areas into one. This is especially important to me now as art and tech begin to overalap and the need for ethical Philosophy in future tech has never
                                    been more higher.
                                    <br />
                                    
                                </h5>
                                <br/>
                            </Media>
                        </Media>
                        </div>
                        <br></br>
                        <div className="container-fluid z-depth-1">
                        <br></br>
                        <h3 className="text-bold">Languages:</h3> 
                        <h5>JavaScript, C#, Python, Java, C/C++, SQL, MongoDB, React</h5>
                        <br/>
                        <h3 className="text-bold">Frameworks:</h3> 
                        <h5>ASP.NET, Django, Reactjs, Android, iOS</h5>
                        <br />
                        </div>
                    </div>
            );
    }
}

export default About;