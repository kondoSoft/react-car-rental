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
		this.setState({
			value: value,
		});
	}
	getUsers (input) {
		if (!input) {
			return Promise.resolve({ options: [] });
		}

		return fetch(`https://api.github.com/search/users?q=${input}`)
		.then((response) => response.json())
		.then((json) => {
			return { options: json.items };
		});
	}
  render() {
    const AsyncComponent = Select.Async;
    return (
				<AsyncComponent
					value={this.state.value}
					onChange={this.onChange}
					valueKey="id" labelKey="login"
					loadOptions={this.getUsers}
          className=""
          clearable = {true}
          />
    );
  }
}

FormAutocomplete.propTypes = {

};

export default FormAutocomplete;
