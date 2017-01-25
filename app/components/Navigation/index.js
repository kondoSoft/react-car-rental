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
      <div className="inner_toggle">
       <nav>
         <input type="checkbox" id="nav" /><label htmlFor="nav"></label>
         <ul>
           <li><Link className="" to="/">Servicios</Link></li>
           <li><Link className="" to="/reserve">Mi Reserva</Link></li>
           <li><Link className="" to="/available">Tu Viaje</Link></li>
           <li><Link className="login" to='/login'>Inicia Sesion</Link></li>
           {/* <li className='liTravel'>
             <Link className="travel" to="">
               <i className='fa fa-suitcase'></i>
             </Link>
           </li> */}
           <li className='liLogout'>
             <Link className="logout" to="">
               <i className='fa fa-sign-out' ></i>
             </Link>
           </li>
         </ul>
       </nav>
     </div>
  );
}

Navigation.propTypes = {

};

export default Navigation;
