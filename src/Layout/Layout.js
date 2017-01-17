import React, { Component } from 'react';
import Header from './Header';


class Layout extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <Header />
          <main className="">
            <div {...this.props} />
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

export default Layout;
