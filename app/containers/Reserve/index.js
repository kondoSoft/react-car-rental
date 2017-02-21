/*
 *
 * Reserve
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectReserve from './selectors';
import FormCarReserve from '../../components/FormCarReserve'
import FormCarReserveClient from '../../components/FormCarReserveClient'
import SingleCar from '../../components/SingleCar'
import {Container} from 'semantic-ui-react'
import { loadingTrue, saveDate, saveLocation } from '../HomePage/actions'
import { saveClient, loadCarReserve, setCar } from './actions'
import { selectHomePageState } from '../HomePage/selectors'
import NewSearch from '../../components/NewSearch'

export class Reserve extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
  }
  getCarId(car, i){
    if(car.ID == this.props.params.carId){
      this.props.setCar(car)
      return(
        <div className='contentReserveSingleCar'>
            <FormCarReserve car={car} key={`form-${i}`}/>
            <SingleCar cars={car} key={i}/>
        </div>
      )
    }
  }
  getCarItem(type, i){
    const dataAry = this.props.HomePage.cars
    return(
      dataAry[type].map((item, i, array)=>{return this.getCarId(item, i)})
    )
  }

  render() {
    const dataInitial = Object.keys(this.props.HomePage.cars)
    return (
        <Container className='containerReserve'>
          <Helmet
            title="Reserve"
            meta={[
              { name: 'description', content: 'Description of Reserve' },
            ]}
          />
          <div className="divSearchAvailable">
            <NewSearch loading={this.props.HomePage.UI.Loading} saveDate={this.props.saveDate} loadingTrue={this.props.loadingTrue}  saveLocation={this.props.saveLocation}/>
          </div>
          {dataInitial.map((car, i)=>{ return this.getCarItem(car, i)})}
          <div className='contentFormReserves'>
            <FormCarReserveClient loading={this.props.HomePage.UI.Loading} loadingTrue={this.props.loadingTrue} saveClient={this.props.saveClient}  />
          </div>
        </Container>

    );
  }
}

Reserve.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Reserve: makeSelectReserve(),
  HomePage: selectHomePageState(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAction: (type)=>{
      dispatch(loadAction(type))
    },
    loadingTrue: (type)=>{
      dispatch(loadingTrue(type))
    },
    saveLocation: (type)=>{
      dispatch(saveLocation(type))
    },
    saveDate: (type)=>{
      dispatch(saveDate(type))
    },
    saveClient:(type)=>{
      dispatch(saveClient(type))
    },
    setCar:(type)=>{
      dispatch(setCar(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reserve);
