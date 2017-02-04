/**
*
* CardCar
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Icon, Image, Grid, Card, Button, Checkbox } from 'semantic-ui-react'
import { browserHistory } from 'react-router'

function CardCar(props) {
  return (
    <Grid.Column className='contentCardCar'>
      <Card className='cardCar'>
        <Card.Content className='contentReserve'>
          <Image floated='right' alt='company' className='imgMarca' src={`https://s3-us-west-2.amazonaws.com/projuv-data/static/ico/${props.car.Vendor}.png`} />
          <Card.Header>
            {props.car.Name}
          </Card.Header>
          <div className='contentCarPrice'>

            <div className='contentImgCar'>
              <img className='imgCar' alt='car' src={`https://s3-us-west-2.amazonaws.com/projuv-data/static/FleetImages/${props.car.PictureURL}`}/>
            </div>
            <div className='contentPrice'>
              <h2 className='colorBlue'>${props.car.Amount}</h2>
              <h4>USD</h4>
              <Checkbox className='checkboxAvail' label='Cotizar' />
            </div>
          </div>
          <div className="contentIcon">
            <Icon name='users' className="colorGreen" />
            <span className="colorGreen letterCarFeatures">{props.car.PassengerQuantity}</span>
            <Icon name='travel' className="colorGreen" />
            <span className="colorGreen letterCarFeatures">{props.car.BaggageQuantity}</span>
            <Icon name='cloud' className="colorGreen" />
            <span className="colorGreen letterCarFeatures">{(props.car.AirConditionInd)=='true' ? 'Si' : 'No'}</span>
            <Icon name='car' className="colorGreen" />
            <span className="colorGreen letterCarFeatures">{(props.car.TransmissionType) == 'Automatic' ? 'A' : 'M'}</span>
            <Icon name='bookmark' className="colorGreen" />
            <span className="colorGreen letterCarFeatures">{props.car.Doors}</span>
          </div>
        </Card.Content>
        <Button className="buttonCotizar secundary" onClick ={() => browserHistory.push('/quotation')} ><span>Reservar</span></Button>
      </Card>
    </Grid.Column>
  );
}

CardCar.propTypes = {

};

export default CardCar;
