import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SportComponent from './SportComponent';
const Games = ()=>{
return(
    <React.Fragment>
    <Header/>
    <div id="content-container">
    <SportComponent/>
    <Footer/>
    </div>
    </React.Fragment>
)
}
export default Games;