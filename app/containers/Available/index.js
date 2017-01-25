/*
 *
 * Available
 *
 */

import React from 'react';
import { Icon,Image, Grid, Container, Header, Card, Button,Segment } from 'semantic-ui-react'
import CardCar from '../../components/CardCar'
import NewSearch from '../../components/NewSearch'


export default class Available extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

    return (
      <Container>
        <div className="divSearchAvailable">
          <NewSearch />
        </div>
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
