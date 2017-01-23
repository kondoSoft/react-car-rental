import React, { Component } from 'react';
import { Header, Grid, Form, Input, Checkbox, Button, Icon, Divider} from 'semantic-ui-react'
import DatePickerForm from '../date-picker/DatePickerForm'
require ('react-datepicker/dist/react-datepicker.css')

class FormMain extends Component {
  render() {
    return (
        <Form>
          <Header as='h1' className='titleForm'>Bienvenido</Header>
          <Grid>
            <Grid.Row centered>
              <Grid.Column mobile={16} tablet={16} computer={16}>
                <Input
                    action={{color:'teal',icon:'globe'}}
                    actionPosition='left'
                    placeholder='Donde recogera el auto'
                    size = 'small'
                    className='inputFormSize'
                  />
                </Grid.Column>
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
              <Button className="buttonGreen">BUSCAR EL MEJOR PRECIO!</Button>
            </Grid.Row>
          </Grid>
        </Form>
    );
  }
}

export default FormMain;
