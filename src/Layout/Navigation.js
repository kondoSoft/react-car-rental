/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Icon, Menu } from 'semantic-ui-react'

class Navigation extends React.Component {

  render() {
    return (
      <Menu.Menu position='right' className='menuNav'>
        <Menu.Item>
          <a className="" to="/">Servicios</a>
        </Menu.Item>
        <Menu.Item>
          <a className="" to="/about">Mi Reserva</a>
        </Menu.Item>
        <Menu.Item>
          <a className="" to="/about">Tu Viaje</a>
        </Menu.Item>
        <Menu.Item className="itemMenu">
          <a className="login" to="/about">Inicia Sesion</a>
        </Menu.Item>
        <Menu.Item className="itemMenu">
          <a className="travel" to="">
            <Icon name='travel'/>
          </a>
        </Menu.Item>
        <Menu.Item className="itemMenu">
          <a className="logout" to="">
            <Icon name='log out'/>
          </a>
        </Menu.Item>
      </Menu.Menu>
    );
  }

}

export default Navigation;
