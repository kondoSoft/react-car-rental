import React, { Component } from 'react';
import Header from './Header';
import Comments from '../components/comments/Comments'
import Footer from './Footer'
import { Container } from 'semantic-ui-react'


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
