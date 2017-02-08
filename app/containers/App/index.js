/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {Container, Menu, Grid, Icon, Divider} from 'semantic-ui-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MainSearch from '../../components/MainSearch'
// import '../../assets/css/index.css'
import 'semantic-ui-css/semantic.min.css'
import '../../main.sass'


export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Header />

          {React.Children.toArray(this.props.children)}


        <Footer/>

      </div>
    );
  }
}
