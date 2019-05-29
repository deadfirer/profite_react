import React from 'react';
import Slide from './app_slide';
import Itens from './app_itens';

class Appcontent extends React.Component {
  constructor() {
    super();
    this.state = {
      catalago: []
    }

  }
  
  componentDidMount(){
  
    const url = JSON.stringify(require("../data/base.json"));
    const data = JSON.parse(url);
    this.setState({ catalago:data.products });
      
  }



  render() {

    return (
      <div className='content'>
        <div className='slideshow'>
          <Slide />
        </div>
        <div className='itens'>
          <h2>Produtos</h2>
          <Itens catalago={this.state.catalago} />
        </div>

      </div>
    );

  }

}


export default Appcontent;