import React from 'react';
import Navigation from './Navigation';

import { Menu, Container } from 'semantic-ui-react'

class Header extends React.Component {


  render() {
    return (
      <header className="header">
        <Container>
          <Menu secondary>
            <Menu.Item>
              <a className="" to="/">
                <img src="/images/creatuviaje-logo.png" alt=""/>

              </a>
            </Menu.Item>
              <Navigation />
          </Menu>
        </Container>
      </header>
    );
  }
}

export default Header;
