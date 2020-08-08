import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,  MDBNavbarToggler, MDBCollapse,
     MDBBox
} from "mdbreact";
import './Header.css';
import Sidebar from './Sidebar/Sidebar';
import Signup from './../SignUp/SignUp';
import SignIn from "../SignIn/SignIn";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
class Header extends Component {
    fun = () => {
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".navbar-fixed-top");
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            })
        });
    }
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBBox className="col-sm-12" onLoad={this.fun()}>
                <MDBNavbar className={`navbar-fixed-top ${this.state.isOpen ? "nav-exp" : ""}`} dark expand="md">
                    <MDBNavItem>
                        <Sidebar />
                    </MDBNavItem>
                    <MDBNavbarToggler className="custom-toggler" onClick={this.toggleCollapse} >
                        <FontAwesomeIcon className="user" icon={faUser} />
                    </MDBNavbarToggler>
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav right >
                            <MDBNavbarBrand className="brandlogo">
                                {/* <img src={require('./logo.png')} alt="" /> */}
                            </MDBNavbarBrand>
                        </MDBNavbarNav>
                        <MDBNavbarNav right className="user-auth">
                            <MDBNavItem className="auth-item">
                                <SignIn />
                            </MDBNavItem>
                            <MDBNavItem className="auth-item soc-signup" >
                                <Signup />
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </MDBBox>

        );
    }
}

export default Header;