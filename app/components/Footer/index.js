/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router'
import { Container, Grid, Icon, Divider } from 'semantic-ui-react'


function Footer() {
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
                <span className="trianguloDer"></span><Link to='/'>INICIO</Link>
                <span className="trianguloDer"></span><Link to=''>SERVICIOS</Link>
                <span className="trianguloDer"></span><Link to=''>SOBRE NOSOTROS</Link>
                <span className="trianguloDer"></span><Link to=''>MI RESERVA</Link>
                <span className="trianguloDer"></span><Link to=''>TU VIAJE</Link>

              </Grid.Column>
            </Grid.Row>
            <Divider className="dividerGreen"/>
            <Grid.Row className='gridPaddingTop'>
              <Grid.Column mobile={16} tablet={8} computer={8} className='gridPaddingTop'>
                <span className="aviso">Una empresa de</span>
                <img src="https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/mayorista.png" alt="Mayorista"/>

              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8} className="footerPrivacidad">
                <a>AVISO DE PRIVACIDAD / </a>
                <a>TERMINOS Y CONDICIONES</a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
    </footer>
  );
}

Footer.propTypes = {

};

export default Footer;
