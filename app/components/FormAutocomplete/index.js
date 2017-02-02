import React from 'react';
// import styled from 'styled-components';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';
import 'react-select/dist/react-select.css'

class FormAutocomplete extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)
      this.state = {
        value: ''
      }
      this.onChange = this.onChange.bind(this)
  }
  onChange (value) {
    //TO DO
    //al tercer dato, realizar el request
		this.setState({
			value: value,
		});
	}
	getCity (city) {
		if (!city) {
			return Promise.resolve({ options: [] });
		}
		return fetch(`http://187.217.208.8:8000/autocomplete/?term=${city}`)
		.then((response) => response.json())
		.then((json) => {
			return { options: json };
		});
	}
  render() {
    const AsyncComponent = Select.Async;
    return (
				<AsyncComponent
					value={this.state.value}
					onChange={this.onChange}
					valueKey="id" labelKey="City"
					loadOptions={this.getCity}
          className=""
          clearable = {true}
          />
    );
  }
}

FormAutocomplete.propTypes = {

};

export default FormAutocomplete;
