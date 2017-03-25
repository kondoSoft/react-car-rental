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
import { loadingTrue, saveDate, saveLocation, commentsLoaded, resetState} from './actions'
import Slider from 'react-slick'


var gridAry=[]
var aryComment=[
    {
        "id":1,
        "Photo": "/static/images/imagesPerfil/person3.jpg",
        "Comment": "A veces el color del auto no me gusta pero engeneral bien",
        "FullName": "Luis Hernandez",
        "Job": "Ing. Sistemas"
    },
    {
        "id":2,
        "Photo": "/static/images/imagesPerfil/person1.jpg",
        "Comment": "Me gusta mucho la atencion al cliente",
        "FullName": "Luis Hernandez",
        "Job": "Ing industrial"
    },
    {
        "id":3,
        "Photo": "/static/images/imagesPerfil/person1.jpg",
        "Comment": "No me gusto mucho porque me cambiaron el color del auto ",
        "FullName": "Luis Hernandez",
        "Job": "Lic. enfermeria"
    },
    {
        "id":4,
        "Photo": "/static/images/imagesPerfil/person2.png",
        "Comment": "Siempre me ayudan en lo que necesito",
        "FullName": "Luis Hernandez",
        "Job": "Maestro"
    },
    {
        "id":5,
        "Photo": "/static/images/imagesPerfil/person3.jpg",
        "Comment": "A veces el color del auto no me gusta pero engeneral bien",
        "FullName": "Luis Hernandez",
        "Job": "Ing. Sistemas"
    },
    {
        "id":6,
        "Photo": "/static/images/imagesPerfil/person1.jpg",
        "Comment": "Me gusta mucho la atencion al cliente",
        "FullName": "Luis Hernandez",
        "Job": "Ing industrial"
    },
    {
        "id":7,
        "Photo": "/static/images/imagesPerfil/person1.jpg",
        "Comment": "No me gusto mucho porque me cambiaron el color del auto ",
        "FullName": "Luis Hernandez",
        "Job": "Lic. enfermeria"
    },
    {
        "id":8,
        "Photo": "/static/images/imagesPerfil/person2.png",
        "Comment": "Siempre me ayudan en lo que necesito",
        "FullName": "Luis Hernandez",
        "Job": "Nada"
    }
]

export class HomePage extends React.PureComponent {

  createGrid(item,i){
    return(
      <Grid key={'Grid'+i}>
        {item.map((comment) => { return this.createComments(comment)})}
      </Grid>
      )
  }

  createComments(data){
    return(
      <div key={'DivComment'+data.id}>
       <Comments comment={data} key={'Comment'+data.id}/>
      </div>
    )
  }

  createGrids(item, index){
    gridAry.push(item)
    var count=index+1
    if (count % 4 == 0) {
      var grid=this.createGrid(gridAry,index)
      gridAry=[]
      return(grid)
    }
  }

  componentWillMount(){
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
      <MainSearch dataUI={this.props.HomePage} resetState={this.props.resetState}  loading={this.props.HomePage.UI.Loading} saveDate={this.props.saveDate} loadingTrue={this.props.loadingTrue}  saveLocation={this.props.saveLocation}/>
          <Container className="containerComments">
            <h2>CLIENTES</h2>
            <span>Que dicen nuestros clientes</span>
            <br/>
            <br/>
            <Slider {...settings}>
              {aryComment.map((comment,i) => { return this.createGrids(comment,i)  }) }
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
    resetState:(type)=>{
      dispatch(resetState(type))
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
