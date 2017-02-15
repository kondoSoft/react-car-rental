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
          <Navigation />
      </Container>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
