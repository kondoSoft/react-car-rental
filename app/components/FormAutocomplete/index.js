import React from 'react';
// import styled from 'styled-components';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';
import 'react-select/dist/react-select.css'
import { Grid, Form, Checkbox } from 'semantic-ui-react'


class FormAutocomplete extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
      this.state = {
        startLocation: '',
        returnLocation: '',
        UI:{
          checkbox : 'activeReturn'
        }
      }
      this.onChange = this.onChange.bind(this)
      this.onChangeReturn = this.onChangeReturn.bind(this)
      this.showReturn = this.showReturn.bind(this)
  }
  onChange (value ) {
    //TO DO
    //al tercer dato, realizar el request
      this.setState({
        startLocation: value,
      });
    this.props.saveLocation([value.Code, 'pickUPLocation'])
	}
  onChangeReturn (valueReturn){
    this.setState({
      returnLocation: valueReturn,
    })
    this.props.saveLocation([valueReturn.Code, 'returnLocation'])

  }
	getCity (city) {
		if (!city) {
			return Promise.resolve({ options: [] });
		}
		return fetch(`http://localhost:8000/autocomplete/?term=${city}`)
		.then((response) => response.json())
		.then((json) => {
			return { options: json };
		});
	}
  showReturn(e , data){
    if( data.checked == true){
      this.setState({
        UI: {checkbox:''}
      })
    }else{
      this.setState({
        UI: {checkbox:'activeReturn'}
      })
    }
  }
  render() {
    const AsyncComponent = Select.Async;
    return (
          <Grid className='gridAutocomplete'>
            <Grid.Row centered>
              <div className="selectFormSearch">
                <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span>
                <AsyncComponent
        					value={this.state.startLocation}
        					onChange={this.onChange}
        					valueKey="id" labelKey="City"
        					loadOptions={this.getCity}
                  className=""
                  clearable = {true}
                  placeholder = 'Donde recogera el auto?'
                  />

              </div>
              <span id='spanPickUpLocation' className='out'>Selecciona ubicacion</span>
            </Grid.Row>
            <Grid.Row centered id='return'>
              <div className={`selectFormSearch ${this.state.UI.checkbox}`} >
                <span className="input-group-addon-standar"><i className="fa fa-globe"></i></span>
                <AsyncComponent
        					value={this.state.returnLocation}
        					onChange={this.onChangeReturn}
        					valueKey="id" labelKey="City"
        					loadOptions={this.getCity}
                  className=""
                  clearable = {true}
                  placeholder = 'Donde entregara el auto?'

                  />
              </div>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Form.Field id='checkLocation'
                  control={Checkbox}
                  onClick={this.showReturn}
                  defaultChecked
                  label={<label className="spanWhite checkboxForm">Entregar en la misma ubicacion</label>}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
    );
  }
}

FormAutocomplete.propTypes = {

};

export default FormAutocomplete;
