import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Game from './Game';
import './Games.css';
import Livecasino from './Livecasino';
import Zoom from 'react-reveal/Zoom';
import LazyLoad from 'react-lazyload';
class GameComponent extends React.Component {
  state = {
    showSlots: true,
    showLiveCasino: false,

  }
  toggleSlotsHandler = () => {
    const doesShow = this.state.showSlots;
    const liveVisible = this.state.showLiveCasino;
    this.setState({ showSlots: !doesShow });
    this.setState({ showLiveCasino: !liveVisible });
  }
  toggleLiveCasinoHandler = () => {
    const doesShow = this.state.showLiveCasino;
    const slotVisible = this.state.showSlots;
    this.setState({ showLiveCasino: !doesShow });
    this.setState({ showSlots: !slotVisible });

  }
  render() {
    let slots = null;
    if (this.state.showSlots) {
      slots = (
        <div className="game-grid">
          <div className="game-grid-1">
            <Game src="bali.png" name="Bali" />
          </div>
          <div className="game-grid-2">
            <Game src="bat_cat.png" name="Bat Cat" />
          </div>
          <div className="game-grid-3">
            <Game src="bingo_bomb.png" name="Bingo Bomb" />
          </div>
          <div className="game-grid-4">
            <Game src="cambodia.png" name="Angkor Kingdom" />
          </div>
          <div className="game-grid-5">
            <Game src="chinese_beauty.png" name="Chinese Beauty" />
          </div>
          <div className="game-grid-6">
            <Game src="chinese_emperor.png" name="Chinese Emperor" />
          </div>
          <div className="game-grid-7">
            <Game src="chinese_new_year.png" name="Chinese New Year" />
          </div>
          <div className="game-grid-8">
            <Game src="cock_fighting.png" name="Cock Fighting" />
          </div>
          <div className="game-grid-9">
            <Game src="constellations.png" name="Constellations" />
          </div>
          <div className="game-grid-10">
            <Game src="cowboy_club.png" name="Cowboy Club" />
          </div>
          <div className="game-grid-11">
            <Game src="crazy_night.png" name="Crazy Night" />
          </div>
          <div className="game-grid-12">
            <Game src="five_golden_fish.png" name="Five Golden Fish" />
          </div>
          <div className="game-grid-13">
            <Game src="iron_baby.png" name="Iron Baby" />
          </div>
          <div className="game-grid-14">
            <Game src="ninja.png" name="Ninja" />
          </div>
          <div className="game-grid-15">
            <Game src="mongolian.png" name="Mongolian" />
          </div>
          <div className="game-grid-16">
            <Game src="pirate_island.png" name="Pirate Island" />
          </div>
          <div className="game-grid-17">
            <Game src="vikings_conquest.png" name="Vikings Conquest" />
          </div>
          <div className="game-grid-18">
            <Game src="zodiac.png" name="Zodiac" />
          </div>
          <div className="game-grid-19">
            <Game src="irish_luck.png" name="Irish Luck" />
          </div>
          <div className="game-grid-20">
            <Game src="magic_show.png" name="Magic Show" />
          </div>
          <div className="game-grid-21">
            <Game src="monkey_king.png" name="Monkey King" />
          </div>
          <div className="game-grid-22">
            <Game src="penguin.png" name="Penguin" />
          </div>
          <div className="game-grid-23">
            <Game src="school_girl.png" name="School Girl" />
          </div>
          <div className="game-grid-24">
            <Game src="thai_wonderland.png" name="Thai Wonderland" />
          </div>
          <div className="game-grid-25">
            <Game src="witch_hunter.png" name="Witch Hunter" />
          </div>
          <div className="game-grid-26">
            <Game src="zombie_party.png" name="Zombie Party" />
          </div>
          <div className="game-grid-27">
            <Game src="medusa.png" name="Medusa" />
          </div>
          <div className="game-grid-28">
            <Game src="safari_time.png" name="Safari Time" />
          </div>
          <div className="game-grid-29">
            <Game src="universe.png" name="Universe" />
          </div>
          <div className="game-grid-30">
            <Game src="super_dog.png" name="Super Dog" />
          </div>
          <div className="game-grid-31">
            <Game src="geisha_art.png" name="Geisha Art" />
          </div>
          <div className="game-grid-32">
            <Game src="highway_king.png" name="Highway King" />
          </div>
          <div className="game-grid-33">
            <Game src="gold_mining.png" name="Gold Mining" />
          </div>
          <div className="game-grid-34">
            <Game src="golden_champion.png" name="Golden Champion" />
          </div>
          <div className="game-grid-35">
            <Game src="halloween.png" name="Halloween Night" />
          </div>
        </div>
      );
    }
    let livecasino = null;
    if (this.state.showLiveCasino) {
      livecasino = (
        <div className="game-grid">
          <div className="lc-grid-1">
            <Livecasino src="baccarat_ins.jpg" name="Baccarat Ins" />
          </div>
          <div className="lc-grid-2">
            <Livecasino src="squezze_cards.jpg" name="Baccarat Squeeze Card" />
          </div>
          <div className="lc-grid-3">
            <Livecasino src="dragon_tiger.jpg" name="Dragon Tiger" />
          </div>
          <div className="lc-grid-4">
            <Livecasino src="fantan.jpg" name="Fantan" />
          </div>
          <div className="lc-grid-5">
            <Livecasino src="roulette.jpg" name="Roulette" />
          </div>
          <div className="lc-grid-6">
            <Livecasino src="sicbo.jpg" name="Sicbo" />
          </div>
          <div className="lc-grid-7">
            <Livecasino src="xocdia.jpg" name="Xocdia" />
          </div>
          <div className="lc-grid-8">
            <Livecasino src="multitables.jpg" name="Multi Views" />
          </div>
        </div>
      )
    }
    return (
      <div className="menu-section">
        <section className="menu-block">
          <MDBContainer>
            <div className="section-title">
              <h2>Our Games</h2>
            </div>
            <MDBRow>
              <MDBCol lg="12" className="d-flex justify-content-center">
                <ul className="menu-filters">
                  <li className={this.state.showSlots ? "filter-active" : ""} onClick={this.toggleSlotsHandler}>Slots</li>
                  <li className={this.state.showLiveCasino ? "filter-active" : ""} onClick={this.toggleLiveCasinoHandler}>Live Casino</li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section className="game-component">
          <MDBContainer fluid>
            <LazyLoad offset={0}>
              {slots}
              {livecasino}
            </LazyLoad>
          </MDBContainer>
        </section>
      </div>
    );
  }
}
export default GameComponent;