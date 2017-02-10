/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import {Container, Menu} from 'semantic-ui-react'
import Navigation from '../Navigation'
import { Link } from 'react-router'


function Header() {
  return (
    <header className="header">
      <Container>
        <Menu secondary>
          <Menu.Item>
            <Link className="" to="/">
              <img src='https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png' alt=""/>
            </Link>
          </Menu.Item>
          <Navigation />
        </Menu>
      </Container>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
