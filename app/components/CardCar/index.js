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
  function ShortName(){
    var textAry = props.car.Name.split(' ')
    var indexOr = textAry.indexOf('or')
    var result = textAry.slice(0, indexOr)

    return result.toString().replace(/,/g," ")
  }
  function getCarCheck(e, data){
    props.addCarChecked(props.car.ID, data.checked)

  }
  return (
    <Grid.Column className='contentCardCar'>
      <Card className='cardCar'>
        <Card.Content className='contentReserve'>
          <Image floated='right' alt='company' className='imgMarca' src={`https://s3-us-west-2.amazonaws.com/projuv-data/static/ico/${props.car.Vendor}.png`} />
          <Card.Header>
            {ShortName()}
          </Card.Header>
          <div className='contentCarPrice'>
            <div className='contentImgCar'>
              <img className='imgCar' alt='car' width='200' src={`https://s3-us-west-2.amazonaws.com/projuv-data/static/FleetImages/${props.car.PictureURL}`}/>
            </div>
            <div className='contentPrice'>
              <h2 className='colorBlue'>${props.car.EstimatedTotalAmount}</h2>
              <h4>USD</h4>
              <Checkbox className='checkboxAvail' label='Cotizar' onChange={getCarCheck.bind(this)}/>
            </div>
          </div>
          <div className="contentIcon colorGreen">
            <i name='users' className="fa fa-users" >
              <span className="colorGreen letterCarFeatures">{props.car.PassengerQuantity}</span>
            </i>
            <i name='travel' className="fa fa-suitcase" >
              <span className="colorGreen letterCarFeatures">{props.car.BaggageQuantity}</span>
            </i>
            <i name='cloud' className="fa fa-snowflake-o" >
              <span className="colorGreen letterCarFeatures">{(props.car.AirConditionInd)=='true' ? 'Si' : 'No'}</span>
            </i>
            <i name='car' className="icon cri-transmision" >
              <span className="colorGreen letterCarFeatures">{(props.car.TransmissionType) == 'Automatic' ? 'A' : 'M'}</span>
            </i>
            <i name='bookmark' className="icon cri-puerta" >
              <span className="colorGreen letterCarFeatures">{props.car.Doors}</span>
            </i>
          </div>
        </Card.Content>
        {(props.availableCar[props.car.ID]) ?
          <Button className="buttonCotizar secundary" onClick ={() => browserHistory.push('/quotation/')} ><span>Cotizar</span></Button>
           :  <Button className="buttonCotizar primary" onClick ={() => browserHistory.push(`/reserve/${props.car.ID}`)} ><span>Reservar</span></Button>
}
      </Card>
    </Grid.Column>
  );
}

CardCar.propTypes = {

};

export default CardCar;
