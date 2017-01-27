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
import { loadAction } from './actions'
import { Icon,Image, Grid, Container, Header, Card, Button,Segment } from 'semantic-ui-react'
import CardCar from '../../components/CardCar'
import NewSearch from '../../components/NewSearch'


export class Available extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  createCardCar(car,i,array){
    // console.log(car)
    return (
      <CardCar car={car} key={array[i]+i}/>
    )
  }
  createGridCarRow(type,i){
    const dataAry = this.props.Available.cars;
    return(
      <div key={'div'+i}>
      <Header as="h3" className="titleCar" key={'Header'+i}>{type}</Header>
      <Grid columns={5} className="contentAvailable" key={'Grid'+i} >
        <Grid.Row id='rowAvailable' key={'GridRow'+i}>
          {dataAry[type].map((item, i,array)=>{ return this.createCardCar(item,i,array) })}
        </Grid.Row>
      </Grid>
    </div>
    )
  }

  render() {

    const dataInitial = Object.keys(this.props.Available.cars);

    return (
      <div>
      {/* {JSON.stringify(this.props.Available.cars)} */}
      <Container>
        <Helmet
          title="Available"
          meta={[
            { name: 'description', content: 'Description of Available' },
          ]}
        />
        <div className="divSearchAvailable">
          <NewSearch />
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
});

function mapDispatchToProps(dispatch) {
  return {
    loadAction: (type)=>{
      dispatch(loadAction(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Available);
