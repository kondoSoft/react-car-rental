/**
*
* DatePickerForm
*
*/

import React from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
// import { saveDate } from '../../containers/HomePage/actions'
// import styled from 'styled-components';
// import { connect } from 'react-redux';

// import { createStructuredSelector } from 'reselect';
// import makeSelectHomePage from '../../containers/HomePage/selectors';

class DatePickerForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)
      this.state = {
        startDate: moment(),
        endDate: moment()
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleChangeReturn = this.handleChangeReturn.bind(this)
  }
  handleChange(date) {
    this.setState({
      startDate: date
    })
    console.log(date.format('YYYY M D'));
    this.props.saveDate([date.format('YYYY M D'), 'pickUPDateTimte'])
  }
  handleChangeReturn(date) {
    this.setState({
      endDate: date
    })
    console.log(date.format('YYYY M D'));
    this.props.saveDate([date.format('YYYY M D'), 'returnDateTimte'])
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
              <option value="00:00">00:00</option>
              <option value="00:30">00:30</option>
              <option value="01:00">01:00</option>
              <option value="01:30">01:30</option>
              <option value="02:00">02:00</option>
              <option value="02:30">02:30</option>
              <option value="03:00">03:00</option>
              <option value="03:30">03:30</option>
              <option value="04:00">04:00</option>
              <option value="04:30">04:30</option>
              <option value="05:00">05:00</option>
              <option value="05:30">05:30</option>
              <option value="06:00">06:00</option>
              <option value="06:30">06:30</option>
              <option value="07:00">07:00</option>
              <option value="07:30">07:30</option>
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
              <option value="09:30">09:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
              <option value="22:00">22:00</option>
              <option value="22:30">22:30</option>
              <option value="23:00">23:00</option>
              <option value="23:30">23:30</option>
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
                selected={this.state.endDate}
                onChange={this.handleChangeReturn}
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

// const mapStateToProps = createStructuredSelector({
//   HomePage: makeSelectHomePage(),
// });
//
// function mapDispatchToProps(dispatch) {
//   return {
//     saveDate: (type)=>{
//       dispatch(saveDate(type))
//     },
//     dispatch,
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(DatePickerForm);


export default DatePickerForm;
