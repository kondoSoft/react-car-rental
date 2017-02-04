/*
 *
 * HomePage
 *
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectHomePage from './selectors';
import MainSearch from '../../components/MainSearch'
import Comments from '../../components/Comments'
import {Container, Grid, Icon, Button} from 'semantic-ui-react'
import { loadingTrue, saveDate, saveLocation } from './actions'

export class HomePage extends React.PureComponent {
  createComments(data,i){
    return(
      <Comments comment={data} key={'Comment'+i}/>
    )
  }
  loading(loading){
    if(loading) {
      return (<li><i className="fa-li fa fa-spinner fa-spin"></i>as bullets</li>)
    }
  }
  render() {
    const dataInitial = this.props.HomePage.comments

    return (
      <div>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
          <MainSearch saveDate={this.props.saveDate} saveLocation={this.props.saveLocation}/>

          <Container className="containerComments">
            <h2>CLIENTES</h2>
            <span>Que dicen nuestros clientes</span>
            <Grid>
            <Button onClick={this.props.loadingTrue}>Hola</Button>
            <Link className="" to="/available">Tu Viaje</Link>
            <div>{this.loading(this.props.HomePage.UI.Loading)}</div>
            {dataInitial.map((comment,i) => { return this.createComments(comment,i)}) }

            <Grid.Column width={16}>
              <Icon color='green' name='circle' size='mini' />
              <Icon color='blue' name='circle' size='mini' />
              <Icon color='blue' name='circle' size='mini' />
            </Grid.Column>
            </Grid>
          </Container>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HomePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadingTrue: (type)=>{
      dispatch(loadingTrue(type))
    },
    saveDate:(type)=>{
      dispatch(saveDate(type))
    },
    saveLocation:(type)=>{
      dispatch(saveLocation(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
