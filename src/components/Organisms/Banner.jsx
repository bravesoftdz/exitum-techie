import React from 'react';
import { MDBBtn } from "mdbreact";
import banner from '../../img/banner.png'
import { withRouter } from 'react-router-dom'

const Banner = (props) => {

    const goRegister = () => {
        props.history.push('/register')
    }

    return (
        <div className="banner">
            <div className="container-ex">
                <div className="container-banner row">
                    <div className="info-banner col-md-6">
                        <h2>Emprende o impulsa todo tipo de proyectos</h2>
                        <div className="register">
                            <MDBBtn onClick={goRegister} className="btn">Registrarme</MDBBtn>
                        </div>
                    </div>
                    <div className="img-banner col-md-6">
                        <img src={banner} alt="banner principal" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Banner);