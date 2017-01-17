/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import MainSlider from './Main-slide';
// import s from './styles.css';
// import { Button, Grid, Menu } from 'semantic-ui-react'

class HomePage extends Component {

  render() {
    return (
      <Layout className="content">
        <MainSlider/>
      </Layout>
    );
  }

}

export default HomePage;
