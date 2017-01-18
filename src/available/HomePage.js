

import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import MainAvailable from './MainAvailable';
// import s from './styles.css';
// import { Button, Grid, Menu } from 'semantic-ui-react'

class HomePage extends Component {

  render() {
    return (
      <Layout>
        <MainAvailable />
      </Layout>
    );
  }

}

export default HomePage;
