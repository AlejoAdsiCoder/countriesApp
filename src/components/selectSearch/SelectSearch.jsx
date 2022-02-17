import React, { useRef } from 'react';
import './select.scss';

function SelectSearch() {
  //   const regionRef = useRef(null);

  const {width} = props;

  const regionRef = useRef(null)
  const handleChange = () => {};

  return (
    <div className="input-field col s12">
      <select style={} onChange={handleChange}>
        <option className="options" value="">
          Filter by Reg ion
        </option>
      </select>
    </div>
  );
}

export default SelectSearch;
