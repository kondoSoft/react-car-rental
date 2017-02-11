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
// import Comments from '../../components/Comments'
import Comments from '../../components/CommentSlide'
import {Container, Grid, Icon, Button} from 'semantic-ui-react'
import { loadingTrue, saveDate, saveLocation, commentsLoaded } from './actions'
import Slider from 'react-slick'


export class HomePage extends React.PureComponent {
  createComments(data,i){
    return(
      <div key={'DivComment'+i}>
      <Comments comment={data} key={'Comment'+i}/>
      </div>
    )
  }
  componentDidMount(){
      this.props.commentsLoaded()
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      responsive:[{
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true

        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }]
    }
    const dataInitial = this.props.HomePage.comments

    return (
      <div>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
          <MainSearch loading={this.props.HomePage.UI.Loading} saveDate={this.props.saveDate} loadingTrue={this.props.loadingTrue}  saveLocation={this.props.saveLocation}/>
          <Container className="containerComments">
            <h2>CLIENTES</h2>
            <span>Que dicen nuestros clientes</span>
            <br/>
            <br/>
            <Slider {...settings}>

              <Grid>{dataInitial.map((comment,i) => { return this.createComments(comment,i)}) }</Grid>
              <Grid>{dataInitial.map((comment,i) => { return this.createComments(comment,i)}) }</Grid>

            </Slider>
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
    commentsLoaded:(type)=>{
      dispatch(commentsLoaded(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
