import React, {Component} from 'react'
import { Input, Button } from 'semantic-ui-react'


class FormCar extends Component{
  render(){
    return(

        <div className='formSingleCar'>
          <div className='newSearch'>
            <span>Busqueda Nueva<i className='fa fa-search'></i></span>
          </div>
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
            <Button className="secundary">ENVIAR</Button>
          </div>
          </div>
        </div>


    )
  }
}

export default FormCar
