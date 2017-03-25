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
import MainSlider from '../MainSlider/'
import Back from 'assets/images/slide.jpg'
import Comments from '../Comments'
import { browserHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


function MainSearch(props) {

  return (
    <div>
      <Container fluid className='slider'>
        <Container className= 'containerFormSearch' fluid>
          <MainSlider />
          <div className='ui container containerForm'>
            <FormSearch title="Bienvenido" dataUI={props.dataUI} loading={props.loading} resetState={props.resetState} loadingTrue={props.loadingTrue}  saveDate={props.saveDate} saveLocation={props.saveLocation}/>
          </div>
        </Container>
      </Container>
    </div>
  );
}

MainSearch.propTypes = {

};

export default MainSearch;
