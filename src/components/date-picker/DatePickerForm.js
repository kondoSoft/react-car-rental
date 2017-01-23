import React, { Component } from 'react'
import { Grid, Icon, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

const options=[
  {text:'12:30', value:'12:30'},
  {text:'00:00', value:'00:00'},
  {text:'00:30', value:'00:30'}
]
class DatePickerForm extends Component {
  constructor(props){
    super(props)
      this.state =
        {
          startDate: moment()
        }
  }
  handleChange(date){
    this.setState({
      startDate: date
    })
  }

  render(){
    return (
      <Grid.Row centered className="topDatePicker">
        <Grid.Column  className="divLabelDate" mobile={12} tablet={9} computer={16}>
          <label className="spanWhite">Cuando lo va a recoger?</label>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={9} computer={9} className='columnPaddingzero columnDatePicker'>
          <Icon className='fontDatePicker' bordered inverted color='green' name='calendar' />
          <DatePicker
            className = 'DatePickerForm'
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </Grid.Column>
        <Grid.Column mobile={5} tablet={5} computer={5} className="selectDivHour">
          <Form.Select
            options={options}
            placeholder='Hora'
            style={{minWidth:'0'}}
          />
        </Grid.Column>
        <Grid.Column mobile={12} tablet={9} computer={16} className="divLabelDate">
          <label className="spanWhite">Cuando lo va a entregar</label>
        </Grid.Column>
        <Grid.Column mobile={8} tablet={9} computer={9} className='columnPaddingzero'>
          <Icon bordered className='fontDatePicker' inverted color='green' name='calendar'/>
          <DatePicker
            className = 'DatePickerForm'
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </Grid.Column>
        <Grid.Column mobile={5} tablet={5} computer={5} className="selectDivHour">
          <Form.Select
            options={options}
            placeholder='Hora'
            style={{minWidth:'0'}}
          />
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default DatePickerForm
