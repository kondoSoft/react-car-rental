import React, {Component} from 'react'
import { Button, Icon } from 'semantic-ui-react'


class SingleCar extends Component{
  render(){
    return(
      <div className='singleCarContainer'>
        <div className='singleCarContainer-title'>
          <h2>Car name</h2><img src="/images/proveedor.png" alt="Nombre del proveedor"/>
        </div>
        <div className='creatur-row'>
          <div className='singleCarContainer-data'>
            <div className='ct-row price-row'>
              <span className='three'>
                <span className='ct-price'>$ 349.56</span>
                <span className='ct-usd'> USD</span>
              </span>
              <span className='one km'>
                Km ilimitado
              </span>

            </div>
            <div className='centralData'>
              <div className='ct-row'>
                <p className='diasRenta'>7 dias de renta</p>
              </div>
              <div className='ct-row'>

                <span className='rentDesc'>
                  Consectetur adipiscing elit, sed do eiusm
  incididunt ut labore et dolore magna.
                </span>
              </div>
          </div>
            <div className='ct-row'>
              <Icon name='home' size='small' />
              <Icon name='home' size='small' />
              <Icon name='home' size='small' />
              <Icon name='home' size='small' />
            </div>
          </div>
          <div className='singleCarContainer-carImage'>
            <img src="/images/generic-car.png" alt="Ford Ka"/>
          </div>
        </div>
        <Button primary> Reservar </Button>
      </div>
    )
  }
}

export default SingleCar
