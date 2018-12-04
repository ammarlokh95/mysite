import React from "react";
import display from "../images/display.jpg";
import { Media } from "mdbreact";
const About = () => {
  return (
    <div className='container-fluid' style={{ width: "90%" }}>
      <div className='container-fluid z-depth-1'>
        <Media>
          <Media left top>
            <Media
              object
              className='align-self-top mt-4 mr-3 z-depth-1'
              src={display}
              alt='Personal'
              style={{
                maxHeight: "200px",
                height: "100%",
                maxWidth: "200px",
                width: "100%"
              }}
            />
          </Media>
          <Media body>
            <h1 className='mt-0 font-weight-bold'>Ammar Lokhandwala</h1>
            <h3>Software Developer</h3>
            <h5>
              I am a full-stack web Developer with a passion for playing with
              new technologies! I strive to find ways in which I can learn and
              grow as a developer and, in the process, get a better
              understanding of this insane, dynamic and exciting field I am a
              part of. I am always looking for work and projects that would
              positively impact the world!
              <br />
              <br />
              Beyond technology, I am also passionate about music and
              Philosophy. I aspire to adopt lessons and ethics learnt in these
              three vastly different areas into one. This is especially
              important to me now as art and tech begin to overalap and the need
              for ethical Philosophy in future tech has never been more higher.
              <br />
            </h5>
            <br />
          </Media>
        </Media>
      </div>
      <br />
      <div className='container-fluid z-depth-1'>
        <br />
        <h2 className='text-bold'>What I'm working on right now:</h2>
        <h3>Music Sessions</h3>
        <h5>
          A web app that is integrated with the Spotify web API to allow users
          to host live playback sessions and allow other users to join into
          these playback sessions putting the host in the drivers seat for the
          listeners music experience.
          <br />
          The app uses a Nodejs backend and a Reactjs frontend with Spotify
          integration.
        </h5>
        <br />
      </div>
      <br />
      <div className='container-fluid z-depth-1'>
        <br />
        <h3 className='text-bold'>Languages:</h3>
        <h5>JavaScript, C#, Python, Java, C/C++, SQL, MongoDB, React</h5>
        <br />
        <h3 className='text-bold'>Frameworks:</h3>
        <h5>ASP.NET, Django, Reactjs, Android, iOS</h5>
        <br />
      </div>
    </div>
  );
};

export default About;
