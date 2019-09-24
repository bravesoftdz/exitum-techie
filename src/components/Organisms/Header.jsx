import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import Login from '../Auth/Login';

class Home extends Component {

    state = {
        isOpen: false,
        modal: false,
        socialOpen: false,
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>

                <MDBNavbar dark expand="md">
                    <div className="container-exlg">
                        <MDBNavbarBrand>
                            <Link to="/"><img src={logo} className="logo-exitum" alt="Logo exitum" /></Link>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink onClick={this.toggle} className="login-session" to="#!">Iniciar Sesión</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </div>
                </MDBNavbar>

                <Login
                    modal={this.state.modal}
                    toggle={this.toggle}
                />

            </>
        );
    }
}

export default Home;