import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './J.css';
const Jack = () => {
    return (
        <section className="winners-block">
            <MDBContainer fluid className="jack">
                <MDBRow className="jackpot">
                    <MDBCol sm="12" md="12" className="jackpot-bk">
                        <img src={require('../../assets/images/jackpot.png')} className="img-fluid jackpot-one" />
                        <div className="jackpot-text">
                            <span className="jackpot-header">Total Jackpot</span>
                            <span className="jackpot-amount">$ 80,146.48</span>
                        </div>
                        {/* <img src={require('../../assets/images/jackpot.png')} className="img-fluid jackpot-two" /> */}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section >

    )
}
export default Jack;