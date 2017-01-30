/**
*
* DatePickerForm
*
*/

import React from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
// import styled from 'styled-components';

class DatePickerForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)
      this.state = {
        startDate: moment()
      }
      this.handleChange = this.handleChange.bind(this)
  }
handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div  className="row topDatePicker centered">
        <div  className="divLabelDate">
          <span className="spanWhite">Cuando lo va a recoger?</span>
        </div>
        <div className='divWhen'>
          <div className='columnPaddingzero columnDatePicker'>
            <div className='selectFormSearchWhen'>
              <span className="input-group-addon-standar"><i className="fa fa-calendar"></i></span>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="selectDivHour">
            <select className="" >
              <option value="hola">00:00</option>
              <option value="mundo">12:00</option>
            </select>
          </div>
        </div>
        <div className="divLabelDate">
          <span className="spanWhite">Cuando lo va a entregar?</span>
        </div>
        <div className='divWhen'>
          <div className='columnPaddingzero'>
            <div className='selectFormSearchWhen'>
              <span className="input-group-addon-standar"><i className="fa fa-calendar"></i></span>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="selectDivHour">
            <select className="" >
              <option value="hola">00:00</option>
              <option value="mundo">12:00</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

DatePickerForm.propTypes = {

};

export default DatePickerForm;
