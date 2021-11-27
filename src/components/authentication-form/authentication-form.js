import React, { useMemo, useCallback } from "react";
import { Form } from "react-final-form";
import PropTypes from 'prop-types';

import AuthenticationInputRow from "../authentication-input-row";

import './authentication-form.css';


const AuthenticationForm = ({ buttonText, inputs }) => {

  const handleSubmit = useCallback((value) => {
    console.log(value)
  }, []);

  const renderedInputRows = useMemo(() => {
    return inputs.map((inputsRow, index) => <AuthenticationInputRow inputs={inputsRow} key={index}/>)
  }, [inputs]);

  return (
    <Form onSubmit={handleSubmit}>
      {
        ({ handleSubmit }) => (
          <form className="authentication-form" onSubmit={handleSubmit}>
            <div className="authentication-element__container">
              {renderedInputRows}
              <div className="authentication-form__button">
                <button type="submit">{buttonText}</button>
              </div>
            </div>
          </form>
        )
      }
    </Form>
  );
}

AuthenticationForm.propTypes = {
  buttonText: PropTypes.string,
  inputs: PropTypes.arrayOf(PropTypes.array)
}

export default AuthenticationForm;