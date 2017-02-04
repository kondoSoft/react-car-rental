/**
*
* LoadingSpin
*
*/

import React from 'react';
// import styled from 'styled-components';



function LoadingSpin(props) {
  function Loading(loading){
    if(loading) {
      return (
        <div className='divSpin'>
          <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
  }
  return (
    <div>
      {Loading(props.loading)}
    </div>
  );
}

LoadingSpin.propTypes = {

};

export default LoadingSpin;
