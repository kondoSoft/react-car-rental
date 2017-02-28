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
import LoadingSpin from '../../components/LoadingSpin'

function FormSearch(props) {
  return (
    <div id="inputSearchDisplay">
      <div className='ui form' >
        <Header as='h1' className='titleForm'>{props.title}</Header>
        <Grid>
          <LoadingSpin loading={props.loading}/>
          <FormAutocomplete saveLocation={props.saveLocation}/>
          <Divider className='dividerForm' />
          <DatePickerForm saveDate={props.saveDate} />
          <Grid.Row centered className='divButtonGreeen'>
            <Button className="buttonGreen" onClick={props.loadingTrue}>BUSCAR EL MEJOR PRECIO!</Button>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

FormSearch.propTypes = {

};

export default FormSearch;
