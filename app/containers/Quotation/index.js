/*
 *
 * Quotation
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectQuotation from './selectors';
import {Container} from 'semantic-ui-react'
import SingleCar from '../../components/SingleCar'
import FormCar from '../../components/FormCar'
import { loadCarReserve } from './actions'
import { selectHomePageState } from '../HomePage/selectors'

export class Quotation extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // createQuotationCar(car,i){
  //   return(
  //       <SingleCar cars={car} key={i}/>
  //     )
  // }
  // createQuotationType(type,i){
  //   const dataAry= this.props.Quotation.car
  //   return(
  //     dataAry[type].map((item,i)=>{return this.createQuotationCar(item,i)})
  //
  //   )
  // }
  getCarId(){
    // console.log(this.props.HomePage.cars);
    // const dataInitial = Object.keys(this.props.HomePage.cars);
    // dataInitial.map()
    // console.log(dataInitial.map())
  }
  render() {

    this.getCarId()
    const dataLocation = this.props.Quotation.location;
    return (
      <Container className='containerQuotation'>
        <Helmet
          title="Quotation"
          meta={[
            { name: 'description', content: 'Description of Quotation' },
          ]}
        />

         <div className='contentSingleCar'>
           {this.props.params.carId}
         {/* {dataInitial.map((item,i)=>{return this.createQuotationType(item,i)})} */}

         </div>
         <FormCar location={dataLocation}/>
       </Container>

    );
  }
}

Quotation.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Quotation: makeSelectQuotation(),
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
    loadCarReserve: (type)=>{
      dispatch(loadCarReserve(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotation);
