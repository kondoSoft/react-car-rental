import React, {Component} from 'react'
import { Input,Divider, Form, options } from 'semantic-ui-react'


class FormCarReserveRight extends Component{
  render(){
    return(
      <div className='formReserveRight'>
        <div className='newSearch'>
          <span>Busqueda Nueva<i className='fa fa-search'></i></span>
        </div>
        <div className="dataClient">
          <div className='titleDataClient newSearch'>
            <span>Datos del arrendador</span>
            <Divider className='dividerFormReserve' />
          </div>
          <div className="formDataClient colorBlue">
            <div className='spanFormData'>
              <span>Mail</span>
            </div>
            <Input placeholder='tucorreo@aqui.com' size = 'small' className='inputFormSize'/>
            <div className='spanFormData'>
              <span>Nombre(s)</span>
            </div>
            <Input placeholder='' size = 'small' className='inputFormSize'/>
            <div className='spanFormData'>
              <span>Apellido(s)</span>
            </div>
            <Input placeholder='' size = 'small' className='inputFormSize'/>
            <div className='spanFormData'>
              <span>Direccion</span>
            </div>
            <Input placeholder='' size = 'small' className='inputFormSize'/>
            <div className='spanFormData'>
              <span>Ciudad</span>
            </div>
            <div className='select'>
              <span className="input-group-addon"><i className="fa fa-globe"></i></span>
              <select className="form-control selectCity" >
                <option value="hola">Hola</option>
                <option value="mundo">Mundo</option>
              </select>
            </div>
            <div className='spanFormData'>
              <span>Codigo Postal</span>
            </div>
            <Input placeholder='' size = 'small' className='inputFormSize'/>
          </div>
        </div>
        <div className="dataCard">
          <div className="titleDataCard newSearch">
              <span>Datos del arrendador</span>
          </div>
          <div className="formDataCard colorBlue">
            <div className='spanFormData'>
              <span>Direccion</span>
            </div>
            <Input placeholder='tucorreo@aqui.com' size = 'small' className='inputFormSize'/>
            <div className='spanDataCard'>
              <span>Direccion como aparece en el estado de cuenta</span>
            </div>
            <div className='spanFormData'>
              <span>Numero de cuenta</span>
            </div>
            <Input placeholder='000000000' size = 'small' className='inputFormSize'/>
            <div className='spanDataCard'>
              <span>Escriba los numeros sin espacios ni guiones</span>
            </div>
            <div className='spanFormData'>
              <span>Codigo de seguridad</span>
            </div>
              <div className='spanFormData'>
              <Input placeholder='000' size = 'small' className='inputFormSize sizeInput'/>
          </div>
            <div className='spanDataCard '>
              <span>Son los ultimos 3 digitos de la tarjeta</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormCarReserveRight
