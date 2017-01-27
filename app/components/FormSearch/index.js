/**
*
* FormSearch
*
*/

import React from 'react';
import {Form, Grid, Input, Button, Header, Checkbox, Divider} from 'semantic-ui-react'
import DatePickerForm from '../DatePickerForm/'
import { browserHistory } from 'react-router'




function FormSearch(props) {
  return (
    <div id="inputSearchDisplay">
    <Form>
      <Header as='h1' className='titleForm'>{props.title}</Header>
      <Grid>
        <Grid.Row centered>
          <div className='selectFormSearch'>
            <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span>
            <input className="inputFormSize" placeholder='Donde recogera el auto?'/>
          </div>
        </Grid.Row>
        <Grid.Row centered id='return'>
          <Grid.Column width={16}>
            <Input
              action={{color:'teal',icon:'globe'}}
              actionPosition='left'
              placeholder='Donde devolvera el auto'
              size = 'small'
              className='inputFormSize'
            />
          </Grid.Column>
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
        <DatePickerForm />
        <Grid.Row centered>
          <Button className="buttonGreen" onClick ={() => browserHistory.push('/available')} >BUSCAR EL MEJOR PRECIO!</Button>
        </Grid.Row>
      </Grid>
    </Form>
  </div>
  );
}

FormSearch.propTypes = {

};

export default FormSearch;
