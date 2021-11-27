import React from "react";
import { Field } from "react-final-form";
import PropTypes from 'prop-types';

import './authentication-input.css';


const AuthenticationInput = ({ label, type = 'text', name }) => {
  return (
    <label forhtml="authentication-input" className="authentication-input">
      <span>{label}</span>
      <Field name={name}>
        {
          ({ input }) => <input
                            {...input}
                            name={name}
                            type={type} 
                            required 
                            autoComplete="off"/> 
        }
      </Field>
    </label>
  );
};

AuthenticationInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string
};

export default AuthenticationInput;
