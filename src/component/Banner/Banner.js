import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

function Banner  ()  {
  return(
    <div className='Banner' >
     <img src='banner.png' alt='banner' className='banner' />
    </div>

  ) ;
  }
Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
