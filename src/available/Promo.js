import React, { Component } from 'react';
import { Grid, Header,Button, Container} from 'semantic-ui-react'
// import s from './Main-slide.css'
const options=[
  {text:'00:00', value:'00:00'},
  {text:'00:30', value:'00:30'}
]
class Promo extends Component {
  render() {
    return (
      <Container text className='containerBottom' textAlign='center'>
        <Grid>
          <Grid.Row verticalAlign='bottom'>
            <Grid.Column >
              <Header as='h1'>
                "EL CAMINO AL <span className="textYellow">EXITO</span>  ES LA ACTITUD"
              </Header>
              <span id='spanWhite'>Checa tu auto para el fin de semana</span>
              <br/>
              <Button basic>
                Reservar
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Promo;
