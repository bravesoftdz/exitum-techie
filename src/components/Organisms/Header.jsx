import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBModal, MDBModalBody } from "mdbreact";
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

class Home extends Component {
    state = {
        isOpen: false,
        modal: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
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

            <MDBContainer>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalBody>
              <div className="form-login">
                    <div className="logo-login">
                        <img src={logo} alt="Logo de exitum"/>
                    </div>
                    <form action="">
                        <div className="form-field">
                            <input type="text" placeholder="Nombre"/>
                        </div>
                        <div className="form-field">
                            <input type="password" placeholder="Contraseña"/>
                        </div>
                        <div className="forget">
                                <Link to="/">¿Olvidaste la contraseña?</Link>
                        </div>
                    </form>
                </div>
                <div className="socials">
                    <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="/"><i className="fab fa-google"></i></Link>
                    <Link to="/"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </MDBModalBody>
            </MDBModal>
          </MDBContainer>

          </>
        );
    }
}

export default Home;