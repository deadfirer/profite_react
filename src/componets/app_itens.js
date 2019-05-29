import React from 'react';

const Itens = ({catalago}) => (
    <div className=''  data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
    {catalago.map((products,index) => ( 
        
        <div className='itens_cols' key={index}>
            <img src={require(`../data/img/${products.code}.png`)} alt='tenis'/>
            <p><label className='lbdesc'>{products.name}</label></p>
            <p><img src={require(`../data/img/${products.stars}.png`)} className='stars' alt='avaliacao'/></p>
            <p><label className='priceIni'>{products.sale===1 ? `de ${moeda(products.price)}`:''}</label></p>
            <p><label className='priceTot'>{products.sale===1 ? 'por ':''}{moeda(products.price-products.setoff)}</label></p>
            <p><label className='parclb'>ou em 3x de ${moeda((products.price-products.setoff)/3)}</label></p>
            <p><button>COMPRAR</button></p>
        </div>

        ))
    }
    </div>
);

function moeda (valor) {
   return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

export default Itens;