
import React from 'react';
import s from './Main-slide.css';
import { Image, Icon, Grid, Container, Form, Button, Input, Checkbox } from 'semantic-ui-react'

class MainSlider extends React.Component {


  render() {
    return (
      <div className="slide" style={{backgroundImage:'url("images/slide.jpg")',backgroundRepeat: 'no-repeat'}}>
        <Container>
          <Grid columns={2} verticalAlign='middle'>
            <Grid.Column width={5} textAlign='center'>
              <div className="form">
                  <Form>
                    <Form.Group widths='12'>
                      <Form.Input className="inputCenter"
                          action={{color:'teal',icon:'globe'}}
                          actionPosition='left'
                          placeholder='Donde recogera el auto'
                        />
                      </Form.Group>
                      <Form.Field
                        control={Checkbox}
                        label={<label>Entregar en la misma ubicacion</label>}
                      />
                  </Form>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }

}

export default MainSlider;
