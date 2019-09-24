import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBBtn } from "mdbreact";
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveToken } from '../../redux/actions/actions'
// import firebase
import firebase from '../../redux/firebase'

class Login extends Component {
    constructor(props) {
        super(props);
        this.loginGoogle = this.loginGoogle.bind(this);
    }
    state = {}

    // Logged with google
    loginGoogle() {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                let token = res.credential.accessToken;
                this.props.saveToken(token);
            }).catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <>
                <MDBContainer>
                    <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
                        <MDBModalBody>
                            <div className="form-login">
                                <div className="logo-login">
                                    <img src={logo} alt="Logo de exitum" />
                                </div>
                                <form action="">
                                    <div className="form-field">
                                        <input type="text" placeholder="Correo" />
                                    </div>
                                    <div className="form-field">
                                        <input type="password" placeholder="Contraseña" />
                                    </div>
                                    <div className="forget">
                                        <Link to="/">¿Olvidaste la contraseña?</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="socials">
                                <MDBBtn><i className="fab fa-facebook-f"></i></MDBBtn>
                                <MDBBtn onClick={this.loginGoogle}><i className="fab fa-google"></i></MDBBtn>
                                <MDBBtn><i className="fab fa-linkedin-in"></i></MDBBtn>
                            </div>
                        </MDBModalBody>
                    </MDBModal>
                </MDBContainer>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.authentication
    }
}

const mapDispatchToProps =  {
    saveToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);