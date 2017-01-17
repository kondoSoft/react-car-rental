import React, { Component } from 'react';
import Header from './Header';
import { Card, Image, Icon, Grid, Container } from 'semantic-ui-react'


class Layout extends Component {
  render() {
    return (
      <Container fluid>
          <Header />
          <main className="">
            <div {...this.props} />
          </main>

            <Container>
              <h2>CLIENTES</h2>
              <span>Que dicen nuestros clientes</span>
              <Grid>
                  <Card.Group itemsPerRow={4}>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Image floated='bottom' size='mini' src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
                        <a>
                          <Icon name='user' />
                          Matthew
                        </a>
                        <p>Abogado</p>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Image floated='bottom' size='mini' src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
                        <a>
                          <Icon name='user' />
                          Matthew
                        </a>
                        <p>Abogado</p>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Image floated='bottom' size='mini' src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
                        <a>
                          <Icon name='user' />
                          Matthew
                        </a>
                        <p>Abogado</p>
                      </Card.Content>
                    </Card>
                    <Card>
                      <Card.Content>
                        <Card.Description>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Image floated='bottom' size='mini' src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
                        <a>
                          <Icon name='user' />
                          Matthew
                        </a>
                        <p>Abogado</p>
                      </Card.Content>
                    </Card>

                  </Card.Group>

              </Grid>
            </Container>

          <footer style={{height:'300px'}}>
            <Container >
                <Grid>
                  <Grid.Row>
                    <Grid.Column mobile={16} tablet={16} computer={4}>
                          <span className="logoAzul">Creatu</span><span className="logoVerde">viaje</span>
                          <br/>
                          <span>2017 Creatur</span>
                          <h4>info@creatuviaje.com</h4>
                          <Icon link bordered name='facebook f'></Icon>
                          <Icon link bordered name='twitter'></Icon>

                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} computer={12}>
                        <a>INICIO</a>
                        <a>SERVICIOS</a>
                        <a>SOBRE NOSOTROS</a>
                        <a>MI RESERVA</a>
                        <a>TU VIAJE</a>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </Container>
          </footer>
      </Container>
    );
  }
}

export default Layout;
