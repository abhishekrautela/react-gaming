import React from 'react';
import './Footer.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
const Footer = () => {
  return (
    <footer className="footer">
      <MDBContainer fluid className="licensing">
        <MDBRow className="footer-block">
          <MDBCol md="2" className="footer-links">
            <div className="tnc">
              Terms and Conditions
            </div>
            <div className="privacy">
              Privacy Policy
            </div>
            <div className="about">
              About iBET 789
            </div>
            <div className="tnc">
              Responsible Gaming
            </div>
          </MDBCol>
          <MDBCol md="1"></MDBCol>
          <MDBCol md="9" className="footer-data">
            <div className="payment-tray">
              <div className="payment-method-1">
                <img src={require('../../assets/images/visa.png')} className="img-fluid payment-img"/>
              </div>
              <div className="payment-method-2">
                <img src={require('../../assets/images/mastercard.png')} className="img-fluid payment-img"/>
              </div>
              <div className="payment-method-3">
                <img src={require('../../assets/images/paypal.png')} className="img-fluid payment-img"/>
              </div>
              <div className="payment-method-4">
                <img src={require('../../assets/images/americanexpress.png')} className="img-fluid payment-img" />
              </div>
              <div className="payment-method-5">
                <img src={require('../../assets/images/dash.png')} className="img-fluid payment-img" />
              </div>
              <div className="payment-method-6">
                <img src={require('../../assets/images/bitcoin.png')} className="img-fluid payment-img"/>
              </div>
              <div className="payment-method-7">
                <img src={require('../../assets/images/ripple.png')} className="img-fluid payment-img" />
              </div>
              <div className="payment-method-8">
                <img src={require('../../assets/images/ethereum.png')} className="img-fluid payment-img" />
              </div>
              <div className="payment-method-9">
                <img src={require('../../assets/images/over18.png')} className="img-fluid payment-img" />
              </div>
            </div>
            <div className="footer-text">
              <div className="footer-text-1">
                Fantastic Gaming is an online casino dedicated to delivering an out of this world gaming experience where you will be kept on the edge of your seat, as you enjoy an exhilarating adventure above the clouds.
                No download required, this online casino is taking the fun to new heights with online video poker and more! You will find the best online slots including all the latest releases, table games and constantly growing progressive jackpots.
              </div>
              <div className="footer-text-2">
                If you can imagine it then Fantastic Gaming can create it - giving more free spins, casino bonuses and exciting live casino games so let your imagination go crazy!
                You can spin and win where nobody has ever been before, whilst exploring new lands of unlimited fun, found above and beyond...
                So don't just travel the world, take off into new galaxy of fun with Fantastic Gaming!
              </div>
              <div className="copyright">
                Disclaimer: You must ensure you meet all age and other regulatory requirements before entering our site to placing a bet.
                <br />
                You are responsible for determining if it is legal for YOU to play any particular games or place any particular wager.
              </div>
              <div className="copyright">
                Copyright 2011-2020 iBET789.com. All rights reserved. Best view with IE 6.0 1024x800 or above.
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </footer>
  )
}
export default Footer;