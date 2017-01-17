import React from 'react';
import Navigation from './Navigation';
import s from './Header.css';
import { Menu, Container, Image, Grid } from 'semantic-ui-react'

class Header extends React.Component {


  render() {
    return (
      <header className="header">
        <Container>
          <Menu secondary>
            <Menu.Item>
              <a className="" to="/">
                <span className="logoAzul">Creatu</span><span className="logoVerde">viaje</span>
              </a>
            </Menu.Item>
            <Menu.Item >
              <Image src="/images/creaturlogo.jpg" size="tiny" verticalAlign='middle' />
            </Menu.Item>
              <Navigation />
          </Menu>
        </Container>
      </header>
    );
  }
}

export default Header;
