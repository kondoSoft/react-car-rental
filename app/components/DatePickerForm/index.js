/**
*
* DatePickerForm
*
*/

import React from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment'
// import styled from 'styled-components';

class DatePickerForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div  className="row topDatePicker centered">
        <div  className="divLabelDate">
          <label className="spanWhite">Cuando lo va a recoger?</label>
        </div>
        <div className='divWhen'>
          <div className='columnPaddingzero columnDatePicker'>
            <div className='selectFormSearchWhen'>
              <span className="input-group-addon-standar"><i className="fa fa-calendar"></i></span>
              <input className="inputFormSize" placeholder='12/Ene/2016'/>
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
          <label className="spanWhite">Cuando lo va a entregar</label>
        </div>
        <div className='divWhen'>
          <div className='columnPaddingzero'>
            <div className='selectFormSearchWhen'>
              <span className="input-group-addon-standar"><i className="fa fa-calendar"></i></span>
              <input className="inputFormSize" placeholder='12/Ene/2016'/>
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
