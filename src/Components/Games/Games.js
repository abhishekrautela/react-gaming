import React from 'react';
import './Games.css';
import Game from './Game';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import { MDBCol } from 'mdbreact';
import Zoom from 'react-reveal/Zoom';
import LazyLoad from 'react-lazyload';
import GameComponent from './GameComponent';
import {Link} from 'react-router-dom';
const Games = (props) => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
    loop: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
  }
  return (
    <React.Fragment>
      <div className="games">
        <section className="our-games">
          <div className="games-section">
            <img src={require('../../assets/images/top_games_img.png')} className="img-fluid" />
            <h3 className="text-center" id="games-header">Top Games</h3>
          </div>
          <Zoom>
            <Swiper {...params}>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2" >
                <Game src="sicbocard.png" name="Sicbo" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="bbcard.png" name="Bingo Bomb" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="camcard.png" name="Angkor Kingdom" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="cbcard.png" name="Chinese Beauty" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="cccard.png" name="Cowboy Club" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="fgfcard.png" name="Five Golden Fish" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="flcard.png" name="Forbidden Legend" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="mkcard.png" name="Monkey King" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="ninjacard.png" name="Ninja" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="ucard.png" name="Universe" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="vccard.png" name="Vikings Conquest" />
              </MDBCol>
              <MDBCol className="gc-item" xs="12" sm="6" md="4" lg="3" xl="2">
                <Game src="witch-huntercard.png" name="Witch Hunter" />
              </MDBCol>
            </Swiper>
          </Zoom>
          <div className="gap-30"></div>
        </section>
        <div className="game-banner">
          <div className="game-banner-icon">
            <figure>
              <img src={require('../../assets/images/games.png')} className="img-fluid" />
            </figure>
            <figcaption className="game-banner-text">New Games</figcaption>
          </div>
          <div className="game-banner-icon">
            <figure>
              <img src={require('../../assets/images/slots.png')} className="img-fluid" />
            </figure>
            <figcaption className="game-banner-text">Slots</figcaption>
          </div>
          <div className="game-banner-icon">
            <figure>
              <img src={require('../../assets/images/tables.png')} className="img-fluid" />
            </figure>
            <figcaption className="game-banner-text">Tables</figcaption>
          </div>
          <div className="game-banner-icon">
            <figure>
              <img src={require('../../assets/images/popular.png')} className="img-fluid" />
            </figure>
            <figcaption className="game-banner-text">Popular</figcaption>
          </div>
          <div className="game-banner-icon">
            <figure>
              <img src={require('../../assets/images/livedealer.png')} className="img-fluid" />
            </figure>
            <figcaption className="game-banner-text">Live Dealer</figcaption>
          </div>
          <div className="game-banner-icon">
            <figure>
              <img src={require('../../assets/images/jackpots.png')} className="img-fluid" />
            </figure>
            <figcaption className="game-banner-text">Jackpots</figcaption>
          </div>
          <div className="game-banner-icon">
            <figure>
              <img src={require('../../assets/images/gameproviders.png')} className="img-fluid" />
            </figure>
            <figcaption className="game-banner-text">Game Providers</figcaption>
          </div>
        </div>
        <Zoom>
          <div className="game-grid">
            <div className="game-poster">
              <GameComponent src="poster.png" name="Three Kingdoms" />
            </div>
            <div className="game-grid-1">
              <GameComponent src="witch-huntercard.png" name="Witch Hunter" />
            </div>
            <div className="game-grid-2">
              <GameComponent src="ninjacard.png" name="Ninja" />
            </div>
            <div className="game-grid-3">
              <GameComponent src="vccard.png" name="Vikings Conquest" />
            </div>
            <div className="game-grid-4">
              <GameComponent src="fgfcard.png" name="Five Golden Fish" />
            </div>
            <div className="game-grid-5">
              <GameComponent src="ucard.png" name="Universe" />
            </div>
            <div className="game-grid-6">
              <GameComponent src="camcard.png" name="Angkor Kingdom" />
            </div>
            <div className="game-grid-7">
              <GameComponent src="baccard.png" name="Baccarat" />
            </div>
            <div className="game-grid-8">
              <GameComponent src="flcard.png" name="Forbidden Legend" />
            </div>
            <div className="game-grid-9">
              <GameComponent src="mkcard.png" name="Monkey King" />
            </div>
            <div className="game-grid-10">
              <GameComponent src="sicbocard.png" name="Sicbo" />
            </div>
            <div className="game-grid-11">
              <GameComponent src="cbcard.png" name="Chinese Beauty" />
            </div>
            <div className="game-grid-12">
              <GameComponent src="sgcard.png" name="School Girl" />
            </div>
            <div className="game-grid-13">
              <GameComponent src="cccard.png" name="Cowboy Club" />
            </div>
            <div className="game-grid-14">
              <GameComponent src="bbcard.png" name="Bingo Bomb" />
            </div>
            <div className="game-grid-15">
              <GameComponent src="rcard.png" name="Roulette" />
            </div>
            <div className="game-grid-16">
              <GameComponent src="zccard.png" name="Zhao Cai Jin Bao" />
            </div>
          </div>
        </Zoom>
        <div className="gap-30"></div>
        <Link to="/games" ><button className="btn-more-games"><span></span>More Games</button></Link>
        <div className="gap-30"></div>
      </div>
    </React.Fragment>
  );
}
export default Games;