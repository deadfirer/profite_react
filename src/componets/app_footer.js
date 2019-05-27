import React from 'react';

const Footer = () => (
    <footer>
        <div className='footerall'>
            <div className='localidade'>
                <h2>Localização</h2>
                <div className='SP'>
                    <p><h3>São Paulo</h3></p>
                    <p><label>Rua do Rócio, 423/1801</label></p>
                    <p><label>Vila Olimpia - SP</label></p>
                    <p><label>04552-000</label></p>
                    <p><label>+55 11 3333 3333</label></p>
                </div>
                <div className='RJ'>
                    <p><h3>Rio de Janeiro</h3></p>
                    <p><label>Vól. da Pátria, 301/702</label></p>
                    <p><label>Botafogo - RJ</label></p>
                    <p><label>22270-000</label></p>
                    <p><label>+55 21 3333 3333</label></p>
                </div>
            </div>
            <div className='center_button'>
                <p>
                    <button>
                        <img src={require('../img/mail.png')} alt='mail' />
                        ENTRE EM CONTATO
                </button>
                </p>
                <p>
                    <button>
                        <img src={require('../img/phone.png')} alt='phone' />
                        FALE COM UM NOSSO CONSULTOR ONLINE
                </button>
                </p>
            </div>
            <div className='developer'>
                <img src={require('../img/dev.png')} alt='developer' />
            </div>
        </div>
    </footer>
);

export default Footer;
