import React, { Component } from 'react';
import { Card, Image, Icon, Grid, Container } from 'semantic-ui-react'

class Comments extends Component {
  render() {
    return (
      <Container className="containerComments">
        <h2>CLIENTES</h2>
        <span>Que dicen nuestros clientes</span>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card className="backgroundCar spaceComillas">
              <Card.Content>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Image shape='circular' floated='bottom' size='mini' src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
                <a>
                  YAHIR GARCIA
                </a>
                <p>Abogado</p>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card className="backgroundCar spaceComillas">
              <Card.Content>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Image shape='circular' floated='bottom' size='mini' src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
                <a>
                  MAYRA BADHY
                </a>
                <p>Locutora</p>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card className="backgroundCar spaceComillas">
              <Card.Content>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Image shape='circular' floated='bottom' size='mini' src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
                <a>
                  JAVIER PEREZ
                </a>
                <p>Chef</p>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Card className="backgroundCar spaceComillas">
              <Card.Content>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Image shape='circular' floated='bottom' size='mini' src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
                <a>
                  JAVIER PEREZ
                </a>
                <p>Chef</p>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={16}>
            <Icon color='green' name='circle' size='mini' />
            <Icon color='blue' name='circle' size='mini' />
            <Icon color='blue' name='circle' size='mini' />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}
export default Comments;
