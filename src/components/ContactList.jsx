import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ paramList = [], onDelete }) => {
  return (
    <div>
      {paramList.map(el => (
        <li key={el.id}>
          {el.name} {el.number}
          <span> </span>
          <button name="delete" onClick={() => onDelete(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  paramList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};
