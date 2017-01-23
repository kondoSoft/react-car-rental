import React, { Component } from 'react';
import { Icon, Grid, Container,Divider } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
            <Grid>
              <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={3}>
                  <span className="logoBlanco">Creatu</span><span className="logoVerde">Viaje</span>
                  <br/>
                  <span className='colorGreen'>2017 Creatur</span>
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
              <Divider className="dividerGreen"/>
              <Grid.Row className='gridPaddingTop'>
                <Grid.Column mobile={16} tablet={8} computer={8} className='gridPaddingTop'>
                  <span className="aviso">Una empresa de</span>
                  <img src="/images/mayorista.png" alt="Mayorista"/>

                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8} className="footerPrivacidad">
                  <a>AVISO DE PRIVACIDAD / </a>
                  <a>TERMINOS Y CONDICIONES</a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
        </Container>
      </footer>
    )
  }
}
export default Footer;
