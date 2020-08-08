import React from 'react';
import {Link} from 'react-router-dom';
const LiveCasino = (props) => {
    return (
            <div className="gc-box">
                <div className="imgBox gc-img-box">
                    <img src={require("../../assets/images/livecasino/" + props.src)} className="swiper-lazy" alt={props.name} loading="lazy" />
                </div>
                <div className="content">
                    <h2>{props.name}</h2>
                    <Link data-test="nav-link" data-target="#signup" data-toggle="modal" data-backdrop="false"> <button className="btn-play">Play</button></Link>
                </div>
            </div>
    );
}
export default LiveCasino;