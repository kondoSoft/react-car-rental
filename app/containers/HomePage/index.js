/*
 *
 * HomePage
 *
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectHomePage from './selectors';
import MainSearch from '../../components/MainSearch'
import Comments from '../../components/Comments'
import {Container, Grid, Icon, Button} from 'semantic-ui-react'
import { loadingTrue, submitSearch } from './actions'

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
          <MainSearch/>
          <Container className="containerComments">
            <h2>CLIENTES</h2>
            <span>Que dicen nuestros clientes</span>
            <Grid>
            {dataInitial.map((comment,i) => { return this.createComments(comment,i)}) }
            <Grid.Column width={16}>
              <Icon color='green' name='circle' size='mini' />
              <Icon color='blue' name='circle' size='mini' />
              <Icon color='blue' name='circle' size='mini' />
            </Grid.Column>
            </Grid>
            <Button onClick={this.props.loadingTrue}>Hola</Button>
            <div>{this.loading(this.props.HomePage.UI.Loading)}</div>
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
    submitSearch:(type)=>{
      dispatch(submitSearch(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
