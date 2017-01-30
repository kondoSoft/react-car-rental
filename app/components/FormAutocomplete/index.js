/**
*
* FormAutocomplete
*
*/

import React from 'react';
// import styled from 'styled-components';
import Autocomplete from 'react-autocomplete'
import { getStates, matchStateToTerm, sortStates, styles, fakeRequest } from 'react-autocomplete'


function FormAutocomplete(props) {

  return (
    <div>
    	<Autocomplete
	     	value={this.state.value}
		    inputProps={{name: "US state", id: "states-autocomplete", className:"inputFormSize"}}
		    items={this.state.unitedStates}
		    getItemValue={(item) => item.name}
		    onSelect={(value, state) => this.setState({ value, unitedStates: [state] }) }
		    onChange={(event, value) => {
		      this.setState({ value, loading: true })
		      fakeRequest(value, (items) => {this.setState({ unitedStates: items, loading: false })})
		      }}
	          renderItem={(item, isHighlighted) => (
	            <div
	              style={isHighlighted ? styles.highlightedItem : styles.item}
	              key={item.abbr}
	              id={item.abbr}
	            >{item.name}</div>
	          )}
	          renderMenu={(items, value, style) => (
	            <div style={{...styles.menu, ...style}}>
	              {value === '' ? (
	                <div style={{padding: 6}}>Type of the name of a United State</div>
	              ) : this.state.loading ? (
	                <div style={{padding: 6}}>Loading...</div>
	              ) : items.length === 0 ? (
	                <div style={{padding: 6}}>No matches for {value}</div>
	              ) : this.renderItems(items)}
	            </div>
	          )}
    	/>
    </div>
  );
}

FormAutocomplete.propTypes = {

};

export default FormAutocomplete;
