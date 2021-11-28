import React, { useState, useCallback } from "react";
import { Field } from "react-final-form";
import { BiHide } from 'react-icons/bi';
import PropTypes from 'prop-types';

import './authentication-input.css';

const HideIcon = ({ type, toggleCustomType }) => {

  const handleClick = useCallback((event) => {
    toggleCustomType();
    event.preventDefault();
  })

  if (type === 'password') {
    return (
      <button className="hide-icon" onClick={handleClick}>
        <BiHide />
      </button>
    );
  }

  return null
}

const AuthenticationInput = ({ label, type = 'text', name }) => {

  const [customType, setCustomType] = useState(type);

  const toggleCustomType = useCallback(() => {
    setCustomType(customType === 'text' ? 'password' : 'text');
  })

  return (
    <label forhtml="authentication-input" className="authentication-input">
      <span>{label}</span>
      <Field name={name}>
        {
          ({ input }) => <input
                            {...input}
                            name={name}
                            type={type === 'password' ? customType : type} 
                            required 
                            autoComplete="off"/> 
        }
      </Field>
      <HideIcon toggleCustomType={toggleCustomType} type={type}/>
    </label>
  );
};

AuthenticationInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string
};

export default AuthenticationInput;
