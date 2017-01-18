

import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import MainSlider from './Main-slide';

//testing
import SingleCar from '../components/single-car/singleCar'
// import s from './styles.css';
// import { Button, Grid, Menu } from 'semantic-ui-react'

class HomePage extends Component {

  render() {
    return (
      <Layout>
        
        <MainSlider/>

      </Layout>
    );
  }

}

export default HomePage;
