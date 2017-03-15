/**
*
* MainSlider
*
*/

import React from 'react';
import Slider from 'react-slick'
// import styled from 'styled-components';


class MainSlider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)
  }
  render() {
    const settings = {
      className: 'slideImg',
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 1500,
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
          initialSlide: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }
    return (
      <Slider {...settings}>
        <div><img src="http://lorempixel.com/1200/540/transport/8/" /></div>
        <div><img src="http://lorempixel.com/1200/540/transport/7/" /></div>
        <div><img src="http://lorempixel.com/1200/540/transport/3/" /></div>
        <div><img src="http://lorempixel.com/1200/540/transport/4/" /></div>
        <div><img src="http://lorempixel.com/1200/540/transport/5/" /></div>
        <div><img src="http://lorempixel.com/1200/540/transport/10/" /></div>
      </Slider>
    );
  }
}

MainSlider.propTypes = {

};

export default MainSlider;
