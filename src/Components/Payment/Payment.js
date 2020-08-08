import React from 'react';
import './Payment.css';
import { MDBRow, MDBCol } from "mdbreact";
import Paymenticon from './Paymenticon';
const Payment = ()=>{
    return(
<section className="payment-methods">
  <MDBRow className="pm">
    <MDBCol sm="12" className="payment-tray">
      <div className="PaymentIconsContainer standard">
      <Paymenticon src="visa.svg" alt="visa" title="visa"/>
      <Paymenticon src="maestro.svg" alt="masestro" title="maestro"/>
      <Paymenticon src="mastercard.svg" alt="mastercard" title="mastercard"/>
      <Paymenticon src="neteller.svg" alt="neteller" title="neteller"/>
      <Paymenticon src="skrill.svg" alt="skrill" title="skrill"/>
      <Paymenticon src="trustly.svg" alt="trustly" title="trustly"/>
      <Paymenticon src="gambling_therapy.svg" alt="gambling therapy" title="gambling therapy"/>
      <Paymenticon src="idebit.svg" alt="idebit" title="idebit"/>
      <Paymenticon src="instadebit.svg" alt="instadebit" title="instadebit"/>
      <Paymenticon src="paysafecard.svg" alt="paysafecard" title="paysafecard"/>
  </div>
  </MDBCol>
  </MDBRow>
</section>
);
};
export default  Payment;
