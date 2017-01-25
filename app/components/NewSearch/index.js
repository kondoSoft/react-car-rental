/**
*
* NewSearch
*
*/

import React from 'react';
import FormSearch from '../FormSearch/'
// import styled from 'styled-components';
function showSearch(){
  var block = document.getElementById('inputSearchDisplay')
  if (block.style.display=='block') {
    block.style.display = 'none'
  }else{
    block.style.display = 'block'
  }
}

function NewSearch() {

  return (
    <div className='newSearch'>
      <span onClick={()=> showSearch()} >Busqueda Nueva<i className='fa fa-search' ></i></span>
      <FormSearch />
    </div>
  );
}

NewSearch.propTypes = {

};

export default NewSearch;
