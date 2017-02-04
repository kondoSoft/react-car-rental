/**
*
* FormSearch
*
*/

import React from 'react';
import {Form, Grid, Input, Button, Header, Checkbox, Divider} from 'semantic-ui-react'
import DatePickerForm from '../DatePickerForm/'
import { browserHistory } from 'react-router'
import FormAutocomplete from '../../components/FormAutocomplete'

function FormSearch(props) {
  return (
    <div id="inputSearchDisplay">
    <div className='ui form' >
      <Header as='h1' className='titleForm'>{props.title}</Header>
      <Grid>
        <FormAutocomplete saveLocation={props.saveLocation}/>
        <Divider className='dividerForm' />
        <DatePickerForm  saveDate={props.saveDate} />
        <Grid.Row centered>
          <Button className="buttonGreen" onClick={props.loadingTrue} >BUSCAR EL MEJOR PRECIO!</Button>
        </Grid.Row>
      </Grid>
    </div>
  </div>
  );
}

FormSearch.propTypes = {

};

export default FormSearch;
