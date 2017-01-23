import React, {Component} from 'react'
import { Button, Icon } from 'semantic-ui-react'


class SingleCar extends Component{
  render(){
    return(
      <div className='singleCarContainer'>
        <div className='singleCarContainer-title'>
          <h2>Ford KA</h2><img src="/images/proveedor.png" alt="Nombre del proveedor"/>
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
              <span className='one icon-km'>
                <i className="icon cri-kilometraje" ></i>
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
          <div className="contentIconSingleCar colorGreen">
            <i className="fa fa-users" >
              <span className="colorGreen letterCarFeatures">5</span>
            </i>
            <i className="fa fa-suitcase" >
              <span className="colorGreen letterCarFeatures">5</span>
            </i>
            <i className="fa fa-snowflake-o" >
              <span className="colorGreen letterCarFeatures">SI</span>
            </i>
            <i className="icon cri-transmision" >
              <span className="colorGreen letterCarFeatures">5</span>
            </i>
            <i className="icon cri-puerta" >
              <span className="colorGreen letterCarFeatures">5</span>
            </i>
          </div>
        </div>
        <div className='singleCarContainer-carImage'>
          <img src="/images/generic-car.png" alt="Ford Ka"/>
        </div>
      </div>
      <Button primary className='buttonCotizar'><span>Reservar</span></Button>
    </div>
    )
  }
}

export default SingleCar
