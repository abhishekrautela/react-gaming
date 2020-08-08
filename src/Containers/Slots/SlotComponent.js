import React from 'react';
import Game from './Game';
import './Slots.css';
import Zoom from 'react-reveal/Zoom';
const SlotComponent = () => {
    return (
        <section className="slot-container">
            <div className="slot-header">
                <div className="slot-title">
                    All Slot Games
                </div>
            </div>
            <div className="game-grid">
                <div className="game-grid-1">
                    <Zoom>
                        <Game src="bali.png" name="Bali" />
                    </Zoom>
                </div>
                <div className="game-grid-2">
                    <Zoom>
                        <Game src="bat_cat.png" name="Bat Cat" />
                    </Zoom>
                </div>
                <div className="game-grid-3">
                    <Zoom>
                        <Game src="bingo_bomb.png" name="Bingo Bomb" />
                    </Zoom>
                </div>
                <div className="game-grid-4">
                    <Zoom>
                        <Game src="cambodia.png" name="Cambodia" />
                    </Zoom>
                </div>
                <div className="game-grid-5">
                    <Zoom>
                        <Game src="chinese_beauty.png" name="Chinese Beauty" />
                    </Zoom>
                </div>
                <div className="game-grid-6">
                    <Zoom>
                        <Game src="chinese_emperor.png" name="Chinese Emperor" />
                    </Zoom>
                </div>
                <div className="game-grid-7">
                    <Zoom>
                        <Game src="chinese_new_year.png" name="Chinese New Year" />
                    </Zoom>
                </div>
                <div className="game-grid-8">
                    <Zoom>
                        <Game src="cock_fighting.png" name="Cock Fighting" />
                    </Zoom>
                </div>
                <div className="game-grid-9">
                    <Zoom>
                        <Game src="constellations.png" name="Constellations" />
                    </Zoom>
                </div>
                <div className="game-grid-10">
                    <Zoom>
                        <Game src="cowboy_club.png" name="Cowboy Club" />
                    </Zoom>
                </div>
                <div className="game-grid-11">
                    <Zoom>
                        <Game src="crazy_night.png" name="Crazy Night" />
                    </Zoom>
                </div>
                <div className="game-grid-12">
                    <Zoom>
                        <Game src="five_golden_fish.png" name="Five Golden Fish" />
                    </Zoom>
                </div>
                <div className="game-grid-13">
                    <Zoom>
                        <Game src="iron_baby.png" name="Iron Baby" />
                    </Zoom>
                </div>
                <div className="game-grid-14">
                    <Zoom>
                        <Game src="ninja.png" name="Ninja" />
                    </Zoom>
                </div>
                <div className="game-grid-15">
                    <Zoom>
                        <Game src="mongolian.png" name="Mongolian" />
                    </Zoom>
                </div>
                <div className="game-grid-16">
                    <Zoom>
                        <Game src="pirate_island.png" name="Pirate Island" />
                    </Zoom>
                </div>
                <div className="game-grid-17">
                    <Zoom>
                        <Game src="vikings_conquest.png" name="Vikings Conquest" />
                    </Zoom>
                </div>
                <div className="game-grid-18">
                    <Zoom>
                        <Game src="zodiac.png" name="Zodiac" />
                    </Zoom>
                </div>
                <div className="game-grid-19">
                    <Zoom>
                        <Game src="irish_luck.png" name="Irish Luck" />
                    </Zoom>
                </div>
                <div className="game-grid-20">
                    <Zoom>
                        <Game src="magic_show.png" name="Magic Show" />
                    </Zoom>
                </div>
                <div className="game-grid-21">
                    <Zoom>
                        <Game src="monkey_king.png" name="Monkey King" />
                    </Zoom>
                </div>
                <div className="game-grid-22">
                    <Zoom>
                        <Game src="penguin.png" name="Penguin" />
                    </Zoom>
                </div>
                <div className="game-grid-23">
                    <Zoom>
                        <Game src="school_girl.png" name="School Girl" />
                    </Zoom>
                </div>
                <div className="game-grid-24">
                    <Zoom>
                        <Game src="thai_wonderland.png" name="Thai Wonderland" />
                    </Zoom>
                </div>
                <div className="game-grid-25">
                    <Zoom>
                        <Game src="witch_hunter.png" name="Witch Hunter" />
                    </Zoom>
                </div>
                <div className="game-grid-26">
                    <Zoom>
                        <Game src="zombie_party.png" name="Zombie Party" />
                    </Zoom>
                </div>
                <div className="game-grid-27">
                    <Zoom>
                        <Game src="medusa.png" name="Medusa" />
                    </Zoom>
                </div>
                <div className="game-grid-28">
                    <Zoom>
                        <Game src="safari_time.png" name="Safari Time" />
                    </Zoom>
                </div>
                <div className="game-grid-29">
                    <Zoom>
                        <Game src="universe.png" name="Universe" />
                    </Zoom>
                </div>
                <div className="game-grid-30">
                    <Zoom>
                        <Game src="super_dog.png" name="Super Dog" />
                    </Zoom>
                </div>
                <div className="game-grid-31">
                    <Zoom>
                        <Game src="forbidden_legend.png" name="Forbidden Legend" />
                    </Zoom>
                </div>
                <div className="game-grid-32">
                    <Zoom>
                        <Game src="geisha_art.png" name="Geisha Art" />
                    </Zoom>
                </div>
                <div className="game-grid-33">
                    <Zoom>
                        <Game src="gold_mining.png" name="Gold Mining" />
                    </Zoom>
                </div>
                <div className="game-grid-34">
                    <Zoom>
                        <Game src="golden_champion.png" name="Golden Champion" />
                    </Zoom>
                </div>
                <div className="game-grid-35">
                    <Zoom>
                        <Game src="halloween.png" name="Halloween Night" />
                    </Zoom>
                </div>
            </div>
        </section>
    );
}
export default SlotComponent;