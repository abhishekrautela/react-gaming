import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import LComponent from './LComponent';
const LiveCasino = () => {
    return (
        <React.Fragment>
            <Header />
            <div id="content-container">
                <LComponent />
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default LiveCasino;