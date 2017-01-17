import React, { Component } from 'react';
import { Header, Grid, Form, Input, Checkbox, Button, Icon} from 'semantic-ui-react'

const options=[
  {text:'00:00', value:'00:00'},
  {text:'00:30', value:'00:30'}
]
class FormMain extends Component {
  render() {
    return (
        <Form>
          <Header as='h1'>Bienvenido</Header>
          <Grid>
            <Grid.Row centered>
              <Input
                  action={{color:'teal',icon:'globe'}}
                  actionPosition='left'
                  placeholder='Donde recogera el auto'
                  size = 'small'
                />
            </Grid.Row>
            <Grid.Row centered>
              <Input
                action={{color:'teal',icon:'globe'}}
                actionPosition='left'
                placeholder='Donde devolvera el auto'
                size = 'small'
              />
              <Form.Field
                control={Checkbox}
                label={<label>Entregar en la misma ubicacion</label>}
              />

            </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={16}>
                  <label>Cuando lo va a recoger?</label>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    action={{color:'teal',icon:'globe'}}
                    actionPosition='left'
                    placeholder='Donde devolvera el auto'
                    size = 'small'
                  />
                </Grid.Column>
                <Grid.Column width={5}>
                <Form.Select
                  options={options}
                  placeholder='Hora'
                  style={{minWidth:'0'}}
                />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={16}>
                  <label>Cuando lo va a entregar</label>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Input
                    action={{color:'teal',icon:'globe'}}
                    actionPosition='left'
                    placeholder='Donde devolvera el auto'
                    size = 'small'
                  />
                </Grid.Column>
                <Grid.Column width={5}>
                <Form.Select
                  options={options}
                  placeholder='Hora'
                  style={{minWidth:'0'}}
                />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Button color='green'>BUSCAR EL MEJOR PRECIO!</Button>
              </Grid.Row>
            </Grid>

        </Form>
    );
  }
}

export default FormMain;
