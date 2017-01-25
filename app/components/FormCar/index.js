/**
*
* FormCar
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react'
import NewSearch from '../NewSearch'


function FormCar() {
  return (
    <div className='formSingleCar'>
      <NewSearch />
      <div className='containerPlace'>
      <div className='placeRent'>
        <h3 className='colorBlue'>Lugar de Renta</h3>
        <span className='textUbication'>Los Angeles International Airport</span>
        <div>
          <span><i className='fa fa-calendar colorGreen'></i>23 de diciembre 2016</span>
          <span><i className='fa fa-clock-o colorGreen'></i>12:00pm</span>
        </div>
      </div>
      <div className='placeReturn'>
        <h3 className='colorBlue'>Lugar de Retorno</h3>
        <span className='textUbication'>Los Angeles International Airport</span>
        <div>
          <span><i className='fa fa-calendar colorGreen'></i>23 de diciembre 2016</span>
          <span><i className='fa fa-clock-o colorGreen'></i>12:00pm</span>
        </div>
      </div>
      <div className='selectedRate'>
        <h3 className='colorBlue'>Tarifa Seleccionada</h3>
        <span className='textUbication'><i className='ico cri-seguro colorGreen'></i>Proteccion Basica</span>
          <ul className='listText'>
            <li>Seguro 1</li>
            <li>Seguro 2</li>
          </ul>
      </div>
      <div className='formQuotation'>
        <h3 className='colorBlue'>Quiero enviar la cotizacion:</h3>
        <Input
          placeholder='tucorreo@aqui.com'
          size = 'small'
          className='inputFormSize'
        />
        <Button className="secundary" onClick={() => browserHistory.push('/reserve')}>ENVIAR</Button>
      </div>
      </div>
    </div>
  );
}

FormCar.propTypes = {

};

export default FormCar;
