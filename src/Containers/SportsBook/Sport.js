import React from 'react';
import {Link} from 'react-router-dom';
const Sport = (props) => {
    return (
            <div className="gc-box">
                <div className="imgBox gc-img-box">
                    <img src={require("../../assets/images/sports/" + props.src)} className="swiper-lazy" alt={props.name} loading="lazy" />
                </div>
                <div className="content">
                    <h2>{props.name}</h2>
                    <Link data-test="nav-link" data-target="#signup" data-toggle="modal" data-backdrop="false"> <button className="btn-play">Bet</button></Link>
                </div>
            </div>
    );
}
export default Sport;