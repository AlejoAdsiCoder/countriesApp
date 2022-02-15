import React from 'react';
import bandera from './col.png';

function Country() {
  return (
    <div className="row">
      <div className="col s6 m3">
        <div className="card">
          <div className="card-image">
            <img src={bandera} alt="logo" />
          </div>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <p>
              <span>Population:</span> 81,770,900
            </p>
            <p>
              <span>Region:</span> Europe
            </p>
            <p>
              <span>Capital: Berlin</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
