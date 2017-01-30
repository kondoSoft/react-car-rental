import React, { Component } from 'react';
import { Grid, Header,Button, Container, Icon} from 'semantic-ui-react'

class Promo extends Component {
  render() {
    return (
      <Container text className='containerBottom' textAlign='center'>
        <Grid>
          <Grid.Row verticalAlign='bottom'>
            <Grid.Column >
              <Header as='h1' className="titlePromo">
                "EL CAMINO AL <span className="textYellow">EXITO,</span><br/>  ES LA ACTITUD"
              </Header>
              <span className='spanWhite'>Checa tu auto para el fin de semana</span>
              <br/>
              <Button basic className="buttonReservar" >
                Reservar
              </Button>
              <Grid.Column width={16}>
                <Icon  name='circle' size='tiny' className='whiteIco'/>
                <Icon  name='circle' size='tiny' className='whiteIco'/>
                <Icon  name='circle' size='small' className='whiteIco'/>
                <Icon name='circle' size='tiny' className='whiteIco'/>
              </Grid.Column>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Promo;
