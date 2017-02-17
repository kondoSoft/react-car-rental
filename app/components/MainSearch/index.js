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
console.log(props.loading);
console.log(props.loadingTrue);
  return (
    <div>
      <Container fluid className='slider'>
        <Container className= 'containerFormSearch' fluid>
          <MainSlider />
          <div className='ui container containerForm'>
            <FormSearch title="Bienvenido" loading={props.loading} loadingTrue={props.loadingTrue}  saveDate={props.saveDate} saveLocation={props.saveLocation}/>
          </div>
          {/* <Grid verticalAlign='middle' style={{marginTop:'0'}}>
            <Grid.Column mobile={16} tablet={8} computer={6} textAlign='center'>
              <ReactCSSTransitionGroup
                transitionName="form"
                transitionEnter={false}
                transitionLeave={false}
                transitionAppear = {true}
                transitionAppearTimeout = {1000}
                >
                <FormSearch title="Bienvenido" loading={props.loading} loadingTrue={props.loadingTrue}  saveDate={props.saveDate} saveLocation={props.saveLocation}/>
              </ReactCSSTransitionGroup>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={10}>

                <Promo/>

            </Grid.Column>
          </Grid> */}
        </Container>
      </Container>
    </div>
  );
}

MainSearch.propTypes = {

};

export default MainSearch;
