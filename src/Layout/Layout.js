import React, { Component } from 'react';
import Header from './Header';
import Comments from './Comments'
import Footer from './Footer'
import { Card, Image, Icon, Grid, Container } from 'semantic-ui-react'


class Layout extends Component {
  render() {
    return (
      <Container fluid>
        <Header />
        <main className="">
          <div {...this.props} />
        </main>
        <Comments />
        <Footer />
    </Container>
    );
  }
}
export default Layout;
