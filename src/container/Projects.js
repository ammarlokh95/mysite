import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";
import '../css/Carousel.css';
import freebook from '../images/freebook.png';
import divineright from '../images/divineright.png';
import landmark from '../images/landmark.png';
class Projects extends Component {
  render() {
    return (
      <div style={{height:"90vh"}}>
      <Carousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1" >
        <CarouselInner style={{height:"89vh"}}>
        <CarouselItem itemId="1">
            <View>
              <img className="d-block w-100" src={landmark} alt="Third slide" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption className="white-text">
              <h3 className="h3-responsive">Landmark</h3>
              <h4>An Android application that finds your current location and shows you places of interests (Landmarks)
                around you. Also, allows you to check-in and share your thoughts on Facebook about the places you have visited.
              </h4>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img className="d-block w-100" src={divineright} alt="Second slide" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption className="white-text">
              <h3 className="h3-responsive">The Divine Right</h3>
              <h4>A 2D turn based strategy game akin to GameBoy classic Advanced Warfare. Set in a mythical
                land of Gods, you play as a lowly God fighting to win the Throne!
              </h4>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img className="d-block w-100" src={freebook} alt="First slide" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption className="white-text">
              <h3 >FreeBook</h3>
              <h4 >A Social media app that allows you to post and view status updates from your friends
                and maintain a user profile. This project is under active development by me and will hopefully
                see many updates soon!
              </h4>
            </CarouselCaption>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
      </div>
    );
  }
}

export default Projects;