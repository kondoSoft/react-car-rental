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
    <nav className='mainmenu'>
      <ul>
        <li><Link to="/">Servicios</Link></li>
        <li><Link to="/">Mi reserva</Link></li>
        <li><Link to="/">Tu Viaje</Link></li>
        <li><Link to="/">Inicia Sesion</Link></li>
        <li className='liLogout'>
          <Link className="logout" to=""> <i className='fa fa-sign-out' ></i> </Link>
        </li>
      </ul>
    </nav>
      //   <nav className="navigation" id="main-navigation">
      //     <a className="navigation-toggle" href="#" id="nav-open">Nav</a>
      //     <div>
      //      <ul>
      //        <li><Link className="" to="/">Servicios</Link></li>
      //        <li><Link className="" to="/reserve">Mi Reserva</Link></li>
      //        <li><Link className="" to="/available">Tu Viaje</Link></li>
      //        <li><Link className="login" to='/login'>Inicia Sesion</Link></li>
      //        {/* <li className='liTravel'>
      //          <Link className="travel" to="">
      //            <i className='fa fa-suitcase'></i>
      //          </Link>
      //        </li> */}
      //        <li className='liLogout'>
      //          <Link className="logout" to=""> <i className='fa fa-sign-out' ></i> </Link>
      //        </li>
      //      </ul>
      //   </div>
      //  </nav>

  );
}

Navigation.propTypes = {

};

export default Navigation;
