import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SlotComponent from './SlotComponent';
const Games = () => {
    return (
        <React.Fragment>
            <Header />
            <div id="content-container">
                <SlotComponent />
                <Footer />
            </div>
        </React.Fragment>
    )
}
export default Games;