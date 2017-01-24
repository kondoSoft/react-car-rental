/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import MainSearch from '../../components/MainSearch'
var FontAwesome = require('react-fontawesome');

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <MainSearch/>
        <p>asdfasdfkajsdfkjsdfkljhsd kjh sadlkj hasdflkjsadlkj lkjasd flkasjdflkasdj flkjsad hflkj flkjsadflkjadfslkj lkj sadflkjdfs

        <FontAwesome name='rocket'/>
        <FontAwesome
       className='super-crazy-colors'
       name='rocket'
       size='2x'
       spin
       style={{ color:'black'}}
     />
        adasdasd</p>
        <h1>Home</h1>
      </div>

    );
  }
}
