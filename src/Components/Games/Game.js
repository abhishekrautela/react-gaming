import React from 'react';
import { Link } from 'react-router-dom';
const Game = (props) => {
    return (
            <div className="gc-box">
                <div className="imgBox">
                    <img src={require("../../assets/images/slots/" + props.src)} className="swiper-lazy" alt={props.name} loading="lazy" />
                </div>
                <div className="content">
                    <h2>{props.name}</h2>
                    <Link to="/games"> <button className="btn-play">Play</button></Link>
                </div>
            </div>
    );
}
export default Game;