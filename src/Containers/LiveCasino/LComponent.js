import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Livecasino from './livegame';
import './Livecasino.css';
const LComponent = () => {
    return (
        <section className="lc-container">
            <div className="lc-header">
                <div className="lc-title">
                    All Live Games
                </div>
            </div>
            <div className="game-grid">

                <div className="game-grid-1">
                    <Livecasino src="baccarat_ins.jpg" name="Baccarat Ins" />
                </div>
                <div className="game-grid-2">
                    <Livecasino src="squezze_cards.jpg" name="Baccarat Squeeze Card" />
                </div>
                <div className="game-grid-3">
                    <Livecasino src="dragon_tiger.jpg" name="Dragon Tiger" />
                </div>
                <div className="game-grid-4">
                    <Livecasino src="fantan.jpg" name="Fantan" />
                </div>
                <div className="game-grid-5">
                    <Livecasino src="roulette.jpg" name="Roulette" />
                </div>
                <div className="game-grid-6">
                    <Livecasino src="sicbo.jpg" name="Sicbo" />
                </div>
                <div className="game-grid-7">
                    <Livecasino src="xocdia.jpg" name="Xocdia" />
                </div>
                <div className="game-grid-8">
                    <Livecasino src="multitables.jpg" name="Multi Views" />
                </div>
            </div>
        </section>
    );
}
export default LComponent;