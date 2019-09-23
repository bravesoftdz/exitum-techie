import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBModal, MDBModalBody, MDBBtn } from "mdbreact";
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'

// import firebase
import firebase from '../../initializers/firebase'

class Home extends Component {

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    state = {
        isOpen: false,
        modal: false,
        socialOpen: false,
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }

    // Logged with google
    login() {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            let token = res.credential.accessToken;   
        }).catch(err => {
            console.log(err);
        })
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
                            <input type="text" placeholder="Correo"/>
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
                    <MDBBtn onClick={this.login}><i className="fab fa-facebook-f"></i></MDBBtn>
                    <MDBBtn><i className="fab fa-google"></i></MDBBtn>
                    <MDBBtn><i className="fab fa-linkedin-in"></i></MDBBtn>
                </div>
              </MDBModalBody>
            </MDBModal>
          </MDBContainer>

          </>
        );
    }
}

export default Home;