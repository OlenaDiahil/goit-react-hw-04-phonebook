import React from 'react';

const Filter = ({ value, onChangeFilterValue }) => {
  return (
    <div>
      <input onChange={onChangeFilterValue} value={value}></input>
    </div>
  );
};
export default Filter;

