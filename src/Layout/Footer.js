import React, { Component } from 'react';
import { Icon, Grid, Container } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={4}>
                  <span className="logoBlanco">Creatu</span><span className="logoVerde">viaje</span>
                  <br/>
                  <span id='spanWhite'>2017 Creatur</span>
                  <h4>info@creatuviaje.com</h4>
                  <Icon link color='green' bordered name='facebook f'></Icon>
                  <Icon link color='green' bordered name='twitter'></Icon>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={16} computer={12} className="menuFooter">
                  <span className="trianguloDer"></span><a>INICIO</a>
                  <span className="trianguloDer"></span><a>SERVICIOS</a>
                  <span className="trianguloDer"></span><a>SOBRE NOSOTROS</a>
                  <span className="trianguloDer"></span><a>MI RESERVA</a>
                  <span className="trianguloDer"></span><a>TU VIAJE</a>

                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Container>
      </footer>
    )
  }
}
export default Footer;
