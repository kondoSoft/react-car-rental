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


function submitSearch(e){
  e.prevenDefault
  console.log(e.prevenDefault)
}
function FormSearch(props) {
  return (
    <div id="inputSearchDisplay">
    <Form onChange={(e)=>console.log(e.target)}>
      <Header as='h1' className='titleForm'>{props.title}</Header>
      <Grid>
        <Grid.Row centered>
          <div className="selectFormSearch">
            <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span>
            <FormAutocomplete/>
          </div>
        </Grid.Row>
        <Grid.Row centered id='return'>
          <div className="selectFormSearch">
            <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span>
            <FormAutocomplete/>
          </div>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Form.Field
              control={Checkbox}
              defaultChecked
              label={<label className="spanWhite checkboxForm">Entregar en la misma ubicacion</label>}
            />
          </Grid.Column>
        </Grid.Row>
        <Divider className='dividerForm' />
        <DatePickerForm  saveDate={props.saveDate} />
        <Grid.Row centered>
          <Button className="buttonGreen" >BUSCAR EL MEJOR PRECIO!</Button>
        </Grid.Row>
      </Grid>
    </Form>
  </div>
  );
}

FormSearch.propTypes = {

};

export default FormSearch;
