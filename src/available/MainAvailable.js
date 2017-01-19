
import React, { Component } from 'react';
import { Image, Icon, Grid, Container, Header, Card, Button,Segment } from 'semantic-ui-react'

class MainAvailable extends Component {

  render() {
    return (
      <Container>
        <Header as="h3" className="titleCar">Mini</Header>
        <Grid columns={5}>
          <Grid.Row id='rowAvailable'>
            <Grid.Column>
              <Card className="cardCar">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      Ford KA
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <img src="/images/dollar.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={10} className="divImageCar">
                      <img src="/images/generic-car.png" />
                    </Grid.Column>
                    <Grid.Column width={6} className="segmentAvail columAlignR">
                      <Segment><h2>$389.56</h2></Segment>
                      <Segment><label>USD</label></Segment>
                      <div className="ui checkbox checkboxAvail">
                        <input type="checkbox" name="example" />
                        <label>Cotizar</label>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Icon name='users' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='travel' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='cloud' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='car' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='bookmark' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Button className="buttonCotizar primary">Reservar</Button>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card className="cardCar">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      Ford KA
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <img src="/images/dollar.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={10} className="divImageCar">
                      <img src="/images/generic-car.png" />
                    </Grid.Column>
                    <Grid.Column width={6} className="segmentAvail columAlignR">
                      <Segment><h2>$389.56</h2></Segment>
                      <Segment><label>USD</label></Segment>
                      <div className="ui checkbox checkboxAvail">
                        <input type="checkbox" name="example" checked />
                        <label>Cotizar</label>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Icon name='users' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='travel' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='cloud' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='car' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='bookmark' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Button className="buttonCotizar secundary" >Cotizar</Button>
              </Card>
            </Grid.Column>
            <Grid.Column >
              <Card className="cardCar">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      Ford KA
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <img src="/images/dollar.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={10} className="divImageCar">
                      <img src="/images/generic-car.png" />
                    </Grid.Column>
                    <Grid.Column width={6} className="segmentAvail columAlignR">
                      <Segment><h2>$389.56</h2></Segment>
                      <Segment><label>USD</label></Segment>
                      <div className="ui checkbox checkboxAvail">
                        <input type="checkbox" name="example" />
                        <label>Cotizar</label>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Icon name='users' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='travel' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='cloud' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='car' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='bookmark' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Button className="buttonCotizar primary" >Reservar</Button>
              </Card>
            </Grid.Column>
            <Grid.Column >
              <Card className="cardCar">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      Ford KA
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <img src="/images/dollar.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={10} className="divImageCar">
                      <img src="/images/generic-car.png" />
                    </Grid.Column>
                    <Grid.Column width={6} className="segmentAvail columAlignR">
                      <Segment><h2>$389.56</h2></Segment>
                      <Segment><label>USD</label></Segment>
                      <div className="ui checkbox checkboxAvail">
                        <input type="checkbox" name="example" />
                        <label>Cotizar</label>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Icon name='users' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='travel' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='cloud' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='car' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='bookmark' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Button className="buttonCotizar primary" >Reservar</Button>
              </Card>
            </Grid.Column>
            <Grid.Column >
              <Card className="cardCar">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      Ford KA
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <img src="/images/dollar.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={10} className="divImageCar">
                      <img src="/images/generic-car.png" />
                    </Grid.Column>
                    <Grid.Column width={6} className="segmentAvail columAlignR">
                      <Segment><h2>$389.56</h2></Segment>
                      <Segment><label>USD</label></Segment>
                      <div className="ui checkbox checkboxAvail">
                        <input type="checkbox" name="example" />
                        <label>Cotizar</label>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Icon name='users' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='travel' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='cloud' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='car' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='bookmark' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Button className="buttonCotizar primary" >Reservar</Button>
              </Card>
            </Grid.Column>
            <Grid.Column >
              <Card className="cardCar">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      Ford KA
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <img src="/images/dollar.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={10} className="divImageCar">
                      <img src="/images/generic-car.png" />
                    </Grid.Column>
                    <Grid.Column width={6} className="segmentAvail columAlignR">
                      <Segment><h2>$389.56</h2></Segment>
                      <Segment><label>USD</label></Segment>
                      <div className="ui checkbox checkboxAvail ">
                        <input type="checkbox" name="example" checked />
                        <label>Cotizar</label>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Icon name='users' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='travel' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='cloud' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='car' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='bookmark' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Button className="buttonCotizar secundary" >Cotizar</Button>
              </Card>
            </Grid.Column>
            <Grid.Column >
              <Card className="cardCar">
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      Ford KA
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <img src="/images/dollar.png" />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={10} className="divImageCar">
                      <img src="/images/generic-car.png" />
                    </Grid.Column>
                    <Grid.Column width={6} className="segmentAvail columAlignR">
                      <Segment><h2>$389.56</h2></Segment>
                      <Segment><label>USD</label></Segment>
                      <div className="ui checkbox checkboxAvail">
                        <input type="checkbox" name="example" checked/>
                        <label>Cotizar</label>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Icon name='users' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='travel' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='cloud' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='car' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                      <Icon name='bookmark' className="colorGreen" />
                      <span className="colorGreen letterCarFeatures">5</span>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Button className="buttonCotizar secundary" >Cotizar</Button>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

export default MainAvailable;
