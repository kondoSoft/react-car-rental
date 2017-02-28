/**
*
* DatePickerForm
*
*/

import React from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select';

class DatePickerForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props){
    super(props)
      this.state = {
        startDate: moment(),
        endDate:moment().add(1, "days"),
        startHour: null,
        endHour: null,
        options: [
          {value: "T09:00", label: '09:00'},
          {value: "T09:30", label: '09:30'},
          {value: "T10:00", label: '10:00'},
          {value: "T10:30", label: '10:30'},
          {value: "T11:00", label: '11:00'},
          {value: "T11:30", label: '11:30'},
          {value: "T12:00", label: '12:00'},
          {value: "T12:30", label: '12:30'},
          {value: "T13:00", label: '13:00'},
          {value: "T13:30", label: '13:30'},
          {value: "T14:00", label: '14:00'},
          {value: "T14:30", label: '14:30'},
          {value: "T15:00", label: '15:00'},
          {value: "T15:30", label: '15:30'},
          {value: "T16:00", label: '16:00'},
          {value: "T16:30", label: '16:30'},
          {value: "T17:00", label: '17:00'},
          {value: "T17:30", label: '17:30'},
          {value: "T18:00", label: '18:00'},
          {value: "T18:30", label: '18:30'},
          {value: "T19:00", label: '19:00'},
          {value: "T19:30", label: '19:30'},
          {value: "T20:00", label: '20:00'},
          {value: "T20:30", label: '20:30'},
          {value: "T21:00", label: '21:00'},
          {value: "T21:30", label: '21:30'},
          {value: "T22:00", label: '22:00'},
          {value: "T22:30", label: '22:30'},
          {value: "T23:00", label: '23:00'},
          {value: "T23:30", label: '23:30'}
        ],

      }
      this.handleChange = this.handleChange.bind(this)
      this.handleChangeReturn = this.handleChangeReturn.bind(this)
      this.onChangeStartHour = this.onChangeStartHour.bind(this)
      this.onChangeEndHour = this.onChangeEndHour.bind(this)
  }
  componentWillUpdate(nextProps){
    return{

    }
  }
  onChangeStartHour(value) {
		this.setState({
			startHour: value
		});
  this.props.saveDate([value+"-06:00", 'pickupTime'])
	}
  onChangeEndHour(valueEndHour) {
    this.setState({
      endHour: valueEndHour
    });
  this.props.saveDate([valueEndHour+"-06:00",'returnTime'])
  }
  handleChange(date) {
    this.setState({
      startDate: date,
      endDate:date
    })
  this.props.saveDate([date.format('YYYY-MM-DD'), 'pickUpDate'])
  }
  handleChangeReturn(date) {
    this.setState({
      endDate: date
    })
  this.props.saveDate([date.format('YYYY-MM-DD'), 'returnDate'])
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
                minDate={moment()}
              />
            </div>
            <span id='spanPickUpDate' className='out '>Seleccione una fecha</span>
          </div>
          <div className="selectDivHour">
            <Select className="selectHour"
              onChange={this.onChangeStartHour}
              options={this.state.options}
              simpleValue
              value={this.state.startHour}
              placeholder = {this.state.options[0].label}
            />
            <span id='spanPickUpTime' className='out'>Seleccione hora</span>

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
                placeholderText='Seleccione..'
                selected={this.state.endDate}
                onChange={this.handleChangeReturn}
                minDate={moment(this.state.startDate)}
              />
            </div>
            <span id='spanreturnDate' className='out '>Seleccione una fecha</span>
          </div>
          <div className="selectDivHour">
            <Select className="selectHour"
              onChange={this.onChangeEndHour}
              options={this.state.options}
              simpleValue
              value={this.state.endHour}
              placeholder = {this.state.options[0].label}
            />
            <span id='spanreturnTime' className='out '>Seleccione hora</span>

          </div>
        </div>
      </div>
    );
  }
}

DatePickerForm.propTypes = {

};
export default DatePickerForm;
