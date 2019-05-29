import React from 'react';
import logo from '../img/logo.png';
import user from '../img/user.png';
import market from '../img/market.png';
import bra from '../img/br.png';
import esp from '../img/es.png';
import eng from '../img/en.png';


const Headers = () => (
    <header>
        <div className='header_content'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='search'>
                <input type='text' placeholder='O que está procurando?' />
            </div>
            <div className='account'>
                <img src={user} alt='user' />
                <label>Minha conta</label>
            </div>
            <div className='market'>
                <img src={market} alt='carrinho' />
            </div>
            <div className='line-ver'></div>
            <div className='language'>
                <img src={bra} alt='pt-br' />
                <img src={esp} alt='es' />
                <img src={eng} alt='en' />
            </div>

        </div>
    </header>
);

export default Headers;