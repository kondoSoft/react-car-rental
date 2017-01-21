
import React, { Component } from 'react';
import { Icon,Image, Grid, Container, Header, Card, Button,Segment } from 'semantic-ui-react'
import CardCar from '../components/card-car/CardCar'

class MainAvailable extends Component {

  render() {
    return (
      <Container>
        <Header as="h3" className="titleCar">Mini</Header>
        <Grid columns={5} className="contentAvailable">
          <Grid.Row id='rowAvailable'>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
          </Grid.Row>
        </Grid>
        <Header as="h3" className="titleCar">Economico</Header>
        <Grid columns={5} className="contentAvailable">
          <Grid.Row id='rowAvailable'>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
            <CardCar/>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

export default MainAvailable;
