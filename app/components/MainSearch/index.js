/**
*
* MainSearch
*
*/

import React from 'react';
// import styled from 'styled-components';
import FormSearch from '../FormSearch/'
import {Container, Grid, } from 'semantic-ui-react'
import Promo from '../Promo/'
import Back from 'assets/images/slide.jpg'
import Comments from '../Comments'


function MainSearch() {
  return (
    <Container fluid className='slider'>
      <Container>
        <Grid verticalAlign='middle' style={{marginTop:'0'}}>
          <Grid.Column mobile={16} tablet={8} computer={6} textAlign='center'>
            <FormSearch />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={10}>
            <Promo/>
          </Grid.Column>
        </Grid>
      </Container>
      <Comments/>

    </Container>
  );
}

MainSearch.propTypes = {

};

export default MainSearch;
