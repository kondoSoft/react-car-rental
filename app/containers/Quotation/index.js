/*
 *
 * Quotation
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { selectedCars, loadAction } from './actions'
import makeSelectQuotation from './selectors';
import selectAvailableState from '../Available/selectors'
import selectHomePageState from '../HomePage/selectors'
import {Container} from 'semantic-ui-react'
import SingleCar from '../../components/SingleCar'
import FormCar from '../../components/FormCar'
import NewSearch from '../../components/NewSearch'

var aryCar=[]
var carData=''
export class Quotation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

 componentWillMount(){
   this.props.loadAction()
   const objectKeys = Object.keys(this.props.HomePage.cars);
   objectKeys.map( (item,i) => { return this.findCars(item,i) })
 }

 setCars(car){
   if (this.props.Available.car[car.ID]) {
     aryCar.push(car)
     this.props.selectedCars(aryCar)
   }
 }

 findCars(type){
   const dataAry = this.props.HomePage.cars
   dataAry[type].map( (car) => { return this.setCars(car) } )
 }

 createQuotationCar(car,i){
    if(this.props.Available.car[car.ID]){
      return(
        <SingleCar cars={car} key={i}/>
      )
    }
  }


  render() {
    // console.log(this.props.Quotation.selected);
    const dataInitial = this.props.Quotation.selected;

    return (
      <Container className='containerQuotation'>
        <Helmet
          title="Quotation"
          meta={[
            { name: 'description', content: 'Description of Quotation' },
          ]}
        />
        <div className="divSearchAvailable">
          <NewSearch loading={this.props.HomePage.UI.Loading} saveDate={this.props.saveDate} loadingTrue={this.props.loadingTrue}  saveLocation={this.props.saveLocation}/>
        </div>
        <div className='contentSingleCar'>
          {dataInitial.map((item,i)=>{return this.createQuotationCar(item,i)})}
        </div>
        <FormCar location={dataInitial}/>
       </Container>
    );
  }
}

Quotation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Quotation: makeSelectQuotation(),
  Available: selectAvailableState(),
  HomePage: selectHomePageState(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAction: (type)=>{
      dispatch(loadAction(type))
    },
     loadLocation: (type)=>{
      dispatch(loadLocation(type))
    },
    selectedCars:(type) => {
      dispatch(selectedCars(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotation);
