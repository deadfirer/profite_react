import React from 'react';
import Slide from './app_slide';
import Itens from './app_itens';

class Appcontent extends React.Component {



  render() {

    return (
      <div className='content'>
        <div className='slideshow'>
          <Slide />
        </div>
        <div className='itens'>
          <h2>Produtos</h2>
          <Itens />
        </div>

      </div>
    );

  }

}


export default Appcontent;