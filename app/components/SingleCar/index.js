/**          <div className='contentReserveSingleCar'>
              <FormCarReserve car={car} key={`form-${i}`}/>
              <SingleCar cars={car} key={i} loadingTrueReserve={this.props.loadingTrueReserve}/>
          </div>
*
* SingleCar
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react'
import { browserHistory } from 'react-router'

function SingleCar(props) {

  return (
    <div className='singleCarContainer'>
      <div className='singleCarContainer-title'>
        <h2>{props.cars.Name}</h2>
        <img width='100' src={`https://s3-us-west-2.amazonaws.com/projuv-data/static/ico/${props.cars.Vendor}.png`} alt="Nombre del proveedor"/>
      </div>
      <div className='creatur-row'>
        <div className='singleCarContainer-data'>
          <div className='ct-row price-row'>
            <span className='three'>
              <span className='ct-price'>$ {props.cars.EstimatedTotalAmount}</span>
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
            <span className="colorGreen letterCarFeatures">{props.cars.PassengerQuantity}</span>
          </i>
          <i className="fa fa-suitcase" >
            <span className="colorGreen letterCarFeatures">{props.cars.BaggageQuantity}</span>
          </i>
          <i className="fa fa-snowflake-o" >
            <span className="colorGreen letterCarFeatures">{(props.cars.AirConditionInd)=='true' ? 'Si' : 'No'}</span>
          </i>
          <i className="icon cri-transmision" >
            <span className="colorGreen letterCarFeatures">{(props.cars.TransmissionType) == 'Automatic' ? 'A' : 'M'}</span>
          </i>
          <i className="icon cri-puerta" >
            <span className="colorGreen letterCarFeatures">{props.cars.Doors}</span>
          </i>
        </div>
      </div>
      <div className='singleCarContainer-carImage'>
        <img src={`https://s3-us-west-2.amazonaws.com/projuv-data/static/FleetImages/${props.cars.PictureURL}`} alt="Auto"/>
      </div>
    </div>
    <Button primary className='buttonCotizar' onClick={  ()=> alert('hola')} ><span>Reservar</span></Button>
    </div>
  );
}

SingleCar.propTypes = {

};

export default SingleCar;
