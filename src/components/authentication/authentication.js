import React from "react";
import PropTypes from 'prop-types';

import AuthenticationHeader from '../authentication-header';
import AuthenticationForm from '../authentication-form';

import './authentication.css';


const Authentication = ({ inputs, buttonText }) => {
  return (
    <div className="authentication">
      <div className="authentication__container">
        <AuthenticationHeader />
        <AuthenticationForm buttonText={buttonText} inputs={inputs} />
      </div>
    </div>
  );
}

Authentication.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.array),
  buttonText: PropTypes.string
};

export default Authentication;
