
import React, { Component } from 'react';
import { Image, Icon, Grid, Container, Header, Card, Button } from 'semantic-ui-react'

class MainAvailable extends Component {

  render() {
    return (
      <Container>
        <Header as="h3">Mini</Header>
        <Grid columns={5}>
          <Grid.Row id='rowAvailable'>
            <Grid.Column>
              <Card className="cardCar">
                <Card.Content>
                  <Card.Header>
                    Ford KA
                  </Card.Header>
                  <Card.Description>
                    $389.56
                  </Card.Description>
                  <Card.Meta>
                    USD
                  </Card.Meta>
                  <Image floated='left' size='tiny' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
                  <Card.Meta>
                    <div class="ui checkbox">
                      <input type="checkbox" name="example" />
                      <label>Cotizar</label>
                    </div>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button basic color='green'>Approve ></Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>
                    Ford KA
                  </Card.Header>
                  <Card.Description>
                    $389.56
                  </Card.Description>
                  <Card.Meta>
                    USD
                  </Card.Meta>
                  <Image floated='right' size='tiny' src='http://semantic-ui.com/images/avatar/large/steve.jpg' />
                  <Card.Meta>
                    <div class="ui checkbox">
                      <input type="checkbox" name="example" />
                      <label>Cotizar</label>
                    </div>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Button basic color='green'>Approve ></Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column style={{background:'#ccc'}}><div style={{background:'yellow'}}>2</div></Grid.Column>
            <Grid.Column style={{background:'#ccc'}}><div style={{background:'yellow'}}>2</div></Grid.Column>
            <Grid.Column style={{background:'#ccc'}}><div style={{background:'yellow'}}>2</div></Grid.Column>
            <Grid.Column style={{background:'#ccc'}}><div style={{background:'yellow'}}>2</div></Grid.Column>
            <Grid.Column style={{background:'#ccc'}}><div style={{background:'yellow'}}>2</div></Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

export default MainAvailable;
