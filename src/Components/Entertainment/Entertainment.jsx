import React from 'react';
import './Entertainment.css';
const Entertainment = () => {
    return (
        <section className="entertainment-section">
            <div className="entertainment-block">
                <div className="ent-text">
                    <h2 className="ent-header">
                        Entertain
                    </h2>
                    <p>We are a leading provider of premium gaming
                    solutions to the world's most successful online casino
                    operators. Our customers can be unique, premium, informed
                    and ahead, all the same time.
                    </p>
                    <button className="btn-ent" data-test="nav-link" data-target="#signup" data-toggle="modal" data-backdrop="false"><span></span>Join Now</button>
                    <div className="comet-block">
                        <img src={require('../../assets/images/cometnew.png')} className="img-fluid comet" />
                    </div>
                </div>
                <div className="ent-img">
                    <img src={require('../../assets/images/entertainment.png')} className="img-fluid entertain-image"  loading="lazy"/>
                </div>
            </div>
        </section>
    )
}
export default Entertainment;