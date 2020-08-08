import React from 'react';
import Sport from './Sport';
import Zoom from 'react-reveal/Zoom';
import './SportsBook.css';
const SportComponent = () => {
    return (
        <section className="sports-container">
            <div className="sports-header">
                <div className="sports-title">
                    All Sports Bet
                </div>
            </div>
            <div className="game-grid">

                <div className="game-grid-1">
                    <Zoom>
                        <Sport src="athletics.jpg" name="Athletics" />
                    </Zoom>
                </div>
                <div className="game-grid-2">
                    <Zoom>
                        <Sport src="badminton.jpg" name="Badminton" />
                    </Zoom>
                </div>
                <div className="game-grid-3">
                    <Zoom>
                        <Sport src="baseball.jpg" name="Baseball" />
                    </Zoom>
                </div>
                <div className="game-grid-4">
                    <Zoom>
                        <Sport src="basketball2.jpg" name="Basketball" />
                    </Zoom>
                </div>
                <div className="game-grid-5">
                    <Zoom>
                        <Sport src="cricket2.jpg" name="Cricket" />
                    </Zoom>
                </div>
                <div className="game-grid-6">
                    <Zoom>
                        <Sport src="f4.jpg" name="Formula 1" />
                    </Zoom>
                </div>
                <div className="game-grid-7">
                    <Zoom>
                        <Sport src="football.jpg" name="Football" />
                    </Zoom>
                </div>
                <div className="game-grid-8">
                    <Zoom>
                        <Sport src="golf.jpg" name="Golf" />
                    </Zoom>
                </div>
                <div className="game-grid-9">
                    <Zoom>
                        <Sport src="hockey.jpg" name="Hockey" />
                    </Zoom>
                </div>
                <div className="game-grid-10">
                    <Zoom>
                        <Sport src="rugby.jpg" name="Rugby" />
                    </Zoom>
                </div>
                <div className="game-grid-11">
                    <Zoom>
                        <Sport src="supermoto.jpg" name="Supermoto" />
                    </Zoom>
                </div>
                <div className="game-grid-12">
                    <Zoom>
                        <Sport src="tennis.jpg" name="Tennis" />
                    </Zoom>
                </div>
            </div>
        </section>
    )

}
export default SportComponent;