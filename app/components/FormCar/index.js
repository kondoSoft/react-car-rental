/**
*
* FormCar
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react'


function FormCar(props) {
  return (
    <div className='formSingleCar'>
      <div className='containerPlace'>
      <div className='placeRent'>
        <h3 className='colorBlue'>Lugar de Renta</h3>
        <span className='textUbication'>{props.location.PickUpLocation_Code}</span>
        <div>
          <span><i className='fa fa-calendar colorGreen'></i>{props.location.PickUp_Date}</span>
          <span><i className='fa fa-clock-o colorGreen'></i>{props.location.PickUp_Date}</span>
        </div>
      </div>
      <div className='placeReturn'>
        <h3 className='colorBlue'>Lugar de Retorno</h3>
        <span className='textUbication'>{props.location.ReturnLocation_Code}</span>
        <div>
          <span><i className='fa fa-calendar colorGreen'></i>{props.location.Return_Date}</span>
          <span><i className='fa fa-clock-o colorGreen'></i>{props.location.Return_Date}</span>
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
