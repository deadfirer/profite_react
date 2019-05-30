import React from 'react';
import Slide from './app_slide';
import Itens from './app_itens';

class Appcontent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalago: [],
      properties: 0,
      property: 0
    }

  }

  componentDidMount() {

    const url = JSON.stringify(require("../data/base.json"));
    const data = JSON.parse(url);
    this.setState({
      catalago: data.products,
      properties: data.count
    });



  }

  nextProperty = () => {
    const newIndex = this.state.property + 1;
    this.setState({
      property: newIndex
    })
  }

  prevProperty = () => {

    const newIndex = this.state.property - 1;
    this.setState({
      property: newIndex
    })
  }


  render() {
    const { properties, property } = this.state;
    return (
      <div className='content'>
        <div className='slideshow'>
          <Slide />
        </div>
        <div className='itens'>
          <h2>Produtos</h2>
          <div className='conteiner-prod'>
            <div className='previous'>
              <button onClick={() => this.prevProperty()} disabled={property === 0}><label>{`<`}</label></button>
            </div>
            <div className='slider-prod'>
                <div className="cards-slider-wrapper" style={{ 'transform': `translateX(-${property * (100 / properties)}%)` }}>
                  {
                    this.state.catalago.map(property => <Itens key={property.code} catalago={property} />)
                  }
                </div>
            </div>
            <div className='next'>
              <button onClick={() => this.nextProperty()} disabled={property === properties.length - 1}  ><label>{`>`}</label></button>
              </div>
          </div>
        </div>
      </div>
    );

  }

}


export default Appcontent;