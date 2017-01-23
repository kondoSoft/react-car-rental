import React, { Component } from 'react';
import { Icon,Image, Grid, Container, Header, Card, Button,Segment, Checkbox } from 'semantic-ui-react'

class CardCar extends Component {

  render() {
    return (
      <Grid.Column className='contentCardCar'>
        <Card className="cardCar">
          <Card.Content className='contentReserve'>
            <Image floated='right' className='imgMarca' src='/images/dollar.png' />
            <Card.Header>
              Ford KA
            </Card.Header>
            <div className='contentCarPrice'>
              <div className='contentImgCar'>
                <img className='imgCar' src='/images/generic-car.png'/>
              </div>
              <div className='contentPrice'>
                <h2 className='colorBlue'>$389.56</h2>
                <h4>USD</h4>
                <Checkbox className='checkboxAvail' label='Cotizar' />
              </div>
            </div>
            <div className="contentIcon">
              <Icon name='users' className="colorGreen" />
              <span className="colorGreen letterCarFeatures">5</span>
              <Icon name='travel' className="colorGreen" />
              <span className="colorGreen letterCarFeatures">5</span>
              <Icon name='cloud' className="colorGreen" />
              <span className="colorGreen letterCarFeatures">5</span>
              <Icon name='car' className="colorGreen" />
              <span className="colorGreen letterCarFeatures">5</span>
              <Icon name='bookmark' className="colorGreen" />
              <span className="colorGreen letterCarFeatures">5</span>
            </div>
          </Card.Content>
          <Button className="buttonCotizar secundary"><span>Cotizar</span></Button>
        </Card>
      </Grid.Column>
    );
  }
}

export default CardCar;
