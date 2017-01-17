
import React, { Component } from 'react';
import FormMain from './Form'
import Promo from './Promo'
import { Image, Icon, Grid, Container } from 'semantic-ui-react'

class MainSlider extends Component {

  render() {
    return (
      <Container fluid style={{backgroundImage:'url("images/slide.jpg")', backgroundSize:' cover',backgroundRepeat: 'no-repeat'}}>
        <Container>
          <Grid columns={2} verticalAlign='middle' style={{marginTop:'0'}}>
            <Grid.Column mobile={16} tablet={5} computer={5} textAlign='center'>
              <FormMain />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={11} computer={11}>
              <Promo/>
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
    );
  }

}

export default MainSlider;
