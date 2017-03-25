/*
 *
 * Available
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectAvailable from './selectors';
import { selectHomePageState } from '../HomePage/selectors'
import { loadCar, addCarChecked } from './actions'
import { loadingTrue, saveDate, saveLocation } from '../HomePage/actions'
import { Icon,Image, Grid, Container, Header, Card, Button,Segment } from 'semantic-ui-react'
import CardCar from '../../components/CardCar'
import NewSearch from '../../components/NewSearch'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class Available extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount(){
      this.props.loadCar()
  }
  createCardCar(car,i,array){
    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnter={false}
        transitionLeave={false}
        transitionAppear = {true}
        transitionAppearTimeout = {1000}
        key={i}
         >
      <CardCar car={car} key={car.ID} addCarChecked={this.props.addCarChecked} availableCar={this.props.Available.car}/>
    </ReactCSSTransitionGroup>
    )
  }
  createGridCarRow(type,i){
    const dataAry = this.props.HomePage.cars
    return(
    <div key={'div'+i} className='divAvailable'>
      <div className='divTitleCar'>
        <Header as="h3" className="titleCar" key={'Header'+i}>{type}</Header>
      </div>
      <Grid columns={5} className="contentAvailable" key={'Grid'+i} >
        <Grid.Row id='rowAvailable' key={'GridRow'+i}>
          {dataAry[type].map((item, i,array)=>{ return this.createCardCar(item,i,array) })}
        </Grid.Row>
      </Grid>
    </div>
    )
  }

  render() {
    const dataInitial = Object.keys(this.props.HomePage.cars);
    return (
      <div>
      <Container>
        <Helmet
          title="Available"
          meta={[
            { name: 'description', content: 'Description of Available' },
          ]}
        />
        {/* loading={this.props.HomePage.UI.Loading} saveDate={this.props.saveDate} loadingTrue={this.props.loadingTrue}  saveLocation={this.props.saveLocation} */}
        <div className="divSearchAvailable">
          <NewSearch loading={this.props.HomePage.UI.Loading} saveDate={this.props.saveDate} loadingTrue={this.props.loadingTrue}  saveLocation={this.props.saveLocation}/>
        </div>
        {dataInitial.map((item,i)=>{ return this.createGridCarRow(item,i) })}
      </Container>
    </div>
    );
  }
}

Available.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Available: makeSelectAvailable(),
  HomePage: selectHomePageState(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadCar: (type)=>{
      dispatch(loadCar(type))
    },
    loadingTrue: (type)=>{
      dispatch(loadingTrue(type))
    },
    saveDate:(type)=>{
      dispatch(saveDate(type))
    },
    saveLocation:(type)=>{
      dispatch(saveLocation(type))
    },
    addCarChecked:(type, state)=>{
      dispatch(addCarChecked(type, state))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Available);
