/**
*
* SingleCarReserve
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react'
import { browserHistory } from 'react-router'

function SingleCarReserve(props) {
  return (
    <div className='singleCarReserveContainer'>
      <div className='singleCarReserveContainer-title'>
        <h2>{props.car.Name}</h2>

        <img src={props.car.Provider} alt="Nombre del proveedor"/>
      </div>
      <div className='creatur-row'>
        <div className='singleCarReserveContainer-data'>
          <div className='ct-row price-row'>
            <span className='three'>
              <span className='ct-price'>{props.car.Amount}</span>
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
        <div className="contentIconSingleCarReserve colorGreen">
          <i className="fa fa-users" >
            <span className="colorGreen letterCarFeatures">{props.car.PassengerQuantity}</span>
          </i>
          <i className="fa fa-suitcase" >
            <span className="colorGreen letterCarFeatures">{props.car.BaggageQuantity}</span>
          </i>
          <i className="fa fa-snowflake-o" >
            <span className="colorGreen letterCarFeatures">{(props.car.AirConditionInd)=='true' ? 'Si' : 'No'}</span>
          </i>
          <i className="icon cri-transmision" >
            <span className="colorGreen letterCarFeatures">{(props.car.TransmissionType) == 'Automatic' ? 'A' : 'M'}</span>
          </i>
          <i className="icon cri-puerta" >
            <span className="colorGreen letterCarFeatures">{props.car.Doors}</span>
          </i>
        </div>
      </div>
      <div className='singleCarContainer-carImage'>
        <img src={props.car.PictureURL} alt="PicCar"/>
      </div>
    </div>
    <Button primary className='buttonCotizar' onClick={() => browserHistory.push('/')}><span>Reservar</span></Button>
  </div>
  )
}


SingleCarReserve.propTypes = {

};

export default SingleCarReserve;
