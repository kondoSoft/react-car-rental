/**
*
* Test
*
*/

import React from 'react';
// import styled from 'styled-components';
import Autocomplete from 'react-autocomplete'
import { getStates, matchStateToTerm, sortStates, styles, fakeRequest } from 'react-autocomplete'



class Test extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

	constructor(props) {
	super(props);
	this.state = {

		value: '',
		unitedStates: [
			{ abbr: "AL", name: "Alabama"},
			{ abbr: "MX", name: "Mexico"}
		],
		loading: false
	};
    
  }

	
  render() {
    return (
      <div>
      <Autocomplete
	     	value={this.state.value}
		    inputProps={{name: "US state", id: "states-autocomplete", className:"inputFormSize"}}
		    items={this.state.unitedStates}
		    getItemValue={(item) => item.name}
		    onSelect={(value, state) => this.setState({ value, unitedStates: [state] }) }
   		    // onSelect={(value, state) => console.log(value) }
		    // onChange={(event, value) => {
		    //   this.setState({ value, loading: true })
		    //   fakeRequest(value, (items) => {this.setState({ unitedStates: items, loading: false })})
		    //   }}
	     //      renderItem={(item, isHighlighted) => (
	     //        <div
	     //          style={isHighlighted ? styles.highlightedItem : styles.item}
	     //          key={item.abbr}
	     //          id={item.abbr}
	     //        >{item.name}</div>
	     //      )}
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
  renderItems (items) {
	console.log(items)
	return items.map((item, index) => {
	  var text = item.props.children
	  if (index === 0 || items[index - 1].props.children.charAt(0) !== text.charAt(0)) {
	    var style = {
	      background: '#eee',
	      color: '#454545',
	      padding: '2px 6px',
	      fontWeight: 'bold'
	    }
	    return [<div style={style}>{text.charAt(0)}</div>, item]
	  }
	  else {
	    return item
	  }
	})
  }
}

Test.propTypes = {

};

export default Test;


