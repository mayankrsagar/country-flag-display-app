import './Country.css';

import React from 'react';

const Country = ({name, flag}) => {
  return (
    <div className='country'>
        <img src={flag} alt={`${name} flag`} style={{height:"5rem" , width:"6rem", margin:"auto"}}/>
        <h5 style={{margin:"auto"}}>{name}</h5>
    </div>
  )
}

export default Country