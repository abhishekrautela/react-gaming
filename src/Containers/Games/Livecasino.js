import React from 'react';
import {Link} from 'react-router-dom';
const Livecasino = (props) => {
    return (
            <div className="gc-box">
                <div className="imgBox gc-img-box">
                    <img src={require("../../assets/images/livecasino/" + props.src)} className="swiper-lazy" loading="lazy" />
                </div>
                <div className="content">
                    <h2>{props.name}</h2>
                    <Link to="/games"> <button className="btn-play">Play</button></Link>
                </div>
            </div>
    );
}
export default Livecasino;