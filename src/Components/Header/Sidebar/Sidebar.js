import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
class Sidebar extends Component {
    openNav = () => {
        document.getElementsByClassName("sidenav")[0].style.width = "250px";
        document.getElementsByClassName("sidemain")[0].style.marginLeft = "250px";
        document.getElementById("main").style.visibility = "hidden";
        if (window.innerWidth > 1400) {
            document.getElementsByClassName("sidenav")[0].style.width = "250px";
            document.getElementsByClassName("sidemain")[0].style.marginLeft = "250px";
        }
        else {
            document.getElementsByClassName("sidenav")[0].style.width = "200px";
            document.getElementsByClassName("sidemain")[0].style.marginLeft = "200px";
        }
    }
    closeNav = () => {
        document.getElementsByClassName("sidenav")[0].style.width = "0";
        document.getElementsByClassName("sidemain")[0].style.marginLeft = "0";
        document.getElementById("main").style.visibility = "visible";
    }
    render() {
        return (
            <React.Fragment >
                <div id="mySidenav" className="sidenav">
                    <span className="closebtn" onClick={this.closeNav}>&times;</span>
                    <div className="sidebar-content">
                        <Link to='/' className="sidelink">
                            <div className="sidebar-data" >
                                <div className="sidebar-icon">
                                    <img src={require('../../../assets/images/buttons/button_home.png')} className="sidebar-img" />
                                </div>
                                <div className="sidebar-links">
                                    Home
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="sidebar-content">
                        <Link to='/games' className="sidelink">
                            <div className="sidebar-data">
                                <div className="sidebar-icon">
                                    <img src={require('../../../assets/images/buttons/button_all_games.png')} className="sidebar-img" />
                                </div>
                                <div className="sidebar-links">
                                    All Games
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="sidebar-content">
                        <Link to='/slots' className="sidelink">
                            <div className="sidebar-data">
                                <div className="sidebar-icon">
                                    <img src={require('../../../assets/images/buttons/button_all_slots.png')} className="sidebar-img" />
                                </div>
                                <div className="sidebar-links">
                                    All Slots
                            </div>
                            </div>
                        </Link>
                    </div>
                    <div className="sidebar-content">
                        <Link to='/livecasino' className="sidelink">
                            <div className="sidebar-data">
                                <div className="sidebar-icon">
                                    <img src={require('../../../assets/images/buttons/button_live_casino.png')} className="sidebar-img" />
                                </div>
                                <div className="sidebar-links">
                                    Live Casino
                            </div>
                            </div>
                        </Link>
                    </div>
                    <div className="sidebar-content">
                        <Link to='/sportsbook' className="sidelink">
                            <div className="sidebar-data">
                                <div className="sidebar-icon">
                                    <img src={require('../../../assets/images/buttons/button_sportsbook.png')} className="sidebar-img" />
                                </div>
                                <div className="sidebar-links">
                                    Sportsbook
                            </div>
                            </div>
                        </Link>
                    </div>
                    <div className="sidebar-content">
                        <Link to='/' className="sidelink" >
                            <div className="sidebar-data">
                                <div className="sidebar-icon">
                                    <img src={require('../../../assets/images/buttons/button_promotions.png')} className="sidebar-img" />
                                </div>
                                <div className="sidebar-links">
                                    Promotions
                            </div>
                            </div>
                        </Link>
                    </div>
                    {/* <div className="sidebar-content">
                        <div className="sidebar-data">
                                <div className="sidebar-icon">
                                <img src={require('../../../assets/images/buttons/button_contact.png')} className="sidebar-img" />
                                </div>
                                <div className="sidebar-links">
                                    <Link to="/" className="sidelink">Contact Us</Link>
                                </div>
                        </div>
                    </div> */}
                </div>
                <div id="main" className="sidemain" >
                    <span className="toggler" onClick={this.openNav}>&#9776;</span>
                </div>
            </React.Fragment>
        )
    }
}
export default Sidebar;
