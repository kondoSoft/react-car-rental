import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import MainAvailable from '../available/MainAvailable';
import QuotationPage from '../quotation/quotation'
import ReservePage from '../reserve/reserve'
import MainSlider from '../main/Main-slide';



// import s from './styles.css';
import { Container } from 'semantic-ui-react'


class HomePage extends Component {

  render() {
    return (
      <Layout>
        {/* <MainSlider/> */}
        {/* <MainAvailable /> */}
        {/* <QuotationPage/> */}
        <ReservePage/>
      </Layout>
    );
  }
}

export default HomePage;
