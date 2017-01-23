
import React, { Component } from 'react';
import FormMain from '../components/form/Form'
import Promo from '../components/promo/Promo'
import { Image, Icon, Grid, Container } from 'semantic-ui-react'

class MainSlider extends Component {

  render() {
    return (
      <Container fluid style={{backgroundImage:'url("images/slide.jpg")', backgroundSize:' cover',backgroundRepeat: 'no-repeat'}}>
        <Container>
          <Grid verticalAlign='middle' style={{marginTop:'0'}}>
            <Grid.Column mobile={16} tablet={8} computer={6} textAlign='center'>
              <FormMain />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={10}>
              <Promo/>
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
    );
  }

}

export default MainSlider;
