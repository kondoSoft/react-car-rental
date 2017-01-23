import React, {Component} from 'react'
import { Input, Button } from 'semantic-ui-react'


class FormCarReserve extends Component{
  render(){
    return(
        <div className='formSingleCarReserve'>
          <div className='containerPlaceReserve'>
          <div className='placeRentReserve'>
            <h3 className='colorBlue'>Lugar de Renta</h3>
            <span className='textUbication'>Los Angeles International Airport</span>
            <span><i className='fa fa-calendar colorGreen'></i>23 de diciembre 2016</span>
            <span><i className='fa fa-clock-o colorGreen'></i>12:00pm</span>
          </div>
          <div className='placeReturnReserve'>
            <h3 className='colorBlue'>Lugar de Retorno</h3>
            <span className='textUbication'>Los Angeles International Airport</span>
            <span><i className='fa fa-calendar colorGreen'></i>23 de diciembre 2016</span>
            <span><i className='fa fa-clock-o colorGreen'></i>12:00pm</span>
          </div>
          <div className='selectedRateReserve backReserve'>
            <h3 className='colorBlue'>Tarifa Seleccionada</h3>
            <span className='textUbication'><i className='ico cri-seguro colorGreen'></i>Proteccion Basica</span>
              <ul className='listText'>
                <li>Seguro 1</li>
                <li>Seguro 2</li>
                <li>Seguro 3</li>
              </ul>
          </div>

          </div>
        </div>


    )
  }
}

export default FormCarReserve
