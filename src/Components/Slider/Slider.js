import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView,  MDBAnimation } from
  "mdbreact";
import './Slider.css';
import Zoom from 'react-reveal/Zoom';
const Slider = () => {
  return (
    <Zoom>
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={false}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView className="slider-data">
              <img src={require('../../assets/images/astronaut.png')} className="img-fluid astronaut" alt="ImageError"/>
              <img src={require('../../assets/images/slider-component-1.png')} className="img-fluid slider-comp" alt="ImageError"/>
              <img src={require('../../assets/images/jack.png')} className="img-fluid slider-jack" alt="ImageError"/>
              <img src={require('../../assets/images/coins.png')} className="img-fluid slider-coin" alt="ImageError" />
              <img src={require('../../assets/images/earth2.png')} className="img-fluid slider-earth" alt="ImageError"/>
              <img src={require('../../assets/images/slider_comp_1.png')} className="img-fluid slider-comp_1" alt="ImageError"/>
              <img src={require('../../assets/images/slider_comp_2.png')} className="img-fluid slider-comp_2" alt="ImageError"/>
              <img src={require('../../assets/images/slider_comp_3.png')} className="img-fluid slider-comp_3" alt="ImageError"/>
              <img src={require('../../assets/images/slider_comp_4.png')} className="img-fluid slider-comp_4" alt="ImageError"/>
              <img src={require('../../assets/images/slider_comp_5.png')} className="img-fluid slider-comp_5" alt="ImageError"/>
              <img src={require('../../assets/images/slider_comp_6.png')} className="img-fluid slider-comp_6" alt="ImageError"/>
              <img src={require('../../assets/images/lens_flare_1.png')} className="img-fluid lens-flare_1" alt="ImageError"/>
              <img src={require('../../assets/images/lens_flare_2.png')} className="img-fluid lens-flare_2" alt="ImageError"/>


            </MDBView>
            <MDBCarouselCaption >
              <MDBAnimation data-aos="fade-left" data-aos-delay={3000} >
                <p className="bonus-offer">Start Your Journey with a bang...</p>
                <p className="bonus-data">$1000 Bonus + 300 free spins!</p>
                <button className="btn-offer" data-test="nav-link" data-target="#signup" data-toggle="modal" data-backdrop="false"><span></span>Begin Now</button>
              </MDBAnimation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img src={require('../../assets/images/astronaut.png')} className="img-fluid astronaut" alt="ImageError"/>
              <img src={require('../../assets/images/slider-component-1.png')} className="img-fluid slider-comp" alt="ImageError"  />
              <img src={require('../../assets/images/jack.png')} className="img-fluid slider-jack" alt="ImageError"  />
              <img src={require('../../assets/images/coins.png')} className="img-fluid slider-coin" alt="ImageError"  />
              <img src={require('../../assets/images/earth2.png')} className="img-fluid slider-earth" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_1.png')} className="img-fluid slider-comp_1" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_2.png')} className="img-fluid slider-comp_2" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_3.png')} className="img-fluid slider-comp_3" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_4.png')} className="img-fluid slider-comp_4" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_5.png')} className="img-fluid slider-comp_5" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_6.png')} className="img-fluid slider-comp_6" alt="ImageError"  />
              <img src={require('../../assets/images/lens_flare_1.png')} className="img-fluid lens-flare_1" alt="ImageError"  />
              <img src={require('../../assets/images/lens_flare_2.png')} className="img-fluid lens-flare_2" alt="ImageError"  />
            </MDBView>
            <MDBCarouselCaption>
              <MDBAnimation data-aos="fade-down" data-aos-delay={3000} >
                <p className="bonus-offer">Welcome Bonus</p>
                <p className="bonus-data">$1000 Bonus + 300 free spins!</p>
                <button className="btn-offer" data-test="nav-link" data-target="#signup" data-toggle="modal" data-backdrop="false"><span></span>Begin Now</button>
              </MDBAnimation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img src={require('../../assets/images/astronaut.png')} className="img-fluid astronaut" alt="ImageError"  />
              <img src={require('../../assets/images/slider-component-1.png')} className="img-fluid slider-comp" alt="ImageError"  />
              <img src={require('../../assets/images/jack.png')} className="img-fluid slider-jack" alt="ImageError"  />
              <img src={require('../../assets/images/coins.png')} className="img-fluid slider-coin"  alt="ImageError" />
              <img src={require('../../assets/images/earth2.png')} className="img-fluid slider-earth" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_1.png')} className="img-fluid slider-comp_1"  alt="ImageError" />
              <img src={require('../../assets/images/slider_comp_2.png')} className="img-fluid slider-comp_2" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_3.png')} className="img-fluid slider-comp_3" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_4.png')} className="img-fluid slider-comp_4" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_5.png')} className="img-fluid slider-comp_5" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_6.png')} className="img-fluid slider-comp_6" alt="ImageError"  />
              <img src={require('../../assets/images/lens_flare_1.png')} className="img-fluid lens-flare_1" alt="ImageError"  />
              <img src={require('../../assets/images/lens_flare_2.png')} className="img-fluid lens-flare_2"  alt="ImageError" />
            </MDBView>
            <MDBCarouselCaption>
              <MDBAnimation data-aos="fade-left" data-aos-delay={3000} >
                <p className="bonus-offer">COMBOS AND FREE SPINS</p>
                <p className="bonus-data">200% Match Bonus</p>
                <button className="btn-offer" data-test="nav-link" data-target="#signup" data-toggle="modal" data-backdrop="false"><span></span>Begin Now</button>
              </MDBAnimation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img src={require('../../assets/images/astronaut.png')} className="img-fluid astronaut"  alt="ImageError"  />
              <img src={require('../../assets/images/slider-component-1.png')} className="img-fluid slider-comp" alt="ImageError"  />
              <img src={require('../../assets/images/jack.png')} className="img-fluid slider-jack" alt="ImageError"  />
              <img src={require('../../assets/images/coins.png')} className="img-fluid slider-coin"  alt="ImageError" />
              <img src={require('../../assets/images/earth2.png')} className="img-fluid slider-earth" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_1.png')} className="img-fluid slider-comp_1" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_2.png')} className="img-fluid slider-comp_2" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_3.png')} className="img-fluid slider-comp_3" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_4.png')} className="img-fluid slider-comp_4" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_5.png')} className="img-fluid slider-comp_5" alt="ImageError"  />
              <img src={require('../../assets/images/slider_comp_6.png')} className="img-fluid slider-comp_6" alt="ImageError"  />
              <img src={require('../../assets/images/lens_flare_1.png')} className="img-fluid lens-flare_1" alt="ImageError"  />
              <img src={require('../../assets/images/lens_flare_2.png')} className="img-fluid lens-flare_2" alt="ImageError"  />
            </MDBView>
            <MDBCarouselCaption>
              <MDBAnimation data-aos="fade-left" data-aos-delay={3000} >
                <p className="bonus-offer">Monthly Bonus</p>
                <p className="bonus-data">Get upto 20% cashback every month</p>
                <button className="btn-offer" data-test="nav-link" data-target="#signup" data-toggle="modal" data-backdrop="false"><span></span>Begin Now</button>
              </MDBAnimation>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </Zoom>
  );
}
export default Slider;