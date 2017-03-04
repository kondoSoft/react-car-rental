/**
*
* Navigation
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router'



function Navigation() {
  return (
    <nav className="navBar">
    <nav className="wrapper">
      <Link className="aLogo" to="/">
        <img src="https://s3-us-west-2.amazonaws.com/projuv-data/creatuviaje/images/creatuviaje-logo.png" />
      </Link>
      <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="label-toggle"></label>
      <ul>
        <Link href="#"><li>Servicio</li></Link>
        <Link href="/reserve-list"><li>Mi Reserva</li></Link>
        <Link href="#"><li>Tu Viaje</li></Link>
        <Link href="#"><li>Inicia Sesion</li></Link>
      </ul>
    </nav>
  </nav>
  );
}

Navigation.propTypes = {

};

export default Navigation;
