import React, { useMemo, useCallback, useState } from "react";
import { Form } from "react-final-form";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import AuthenticationInputRow from "../authentication-input-row";
import { withService } from "../hoc";
import { compose } from '../../utils';
import { userAuth } from "../../actions";

import './authentication-form.css';


const AuthenticationForm = ({ buttonText, inputs, userAuth }) => {

  const [errorMessageVisibility, setErrorMessageVisibility] = useState('hidden');

  const handleSubmit = useCallback((userInfo) => {
    userAuth(userInfo);
    const { password, confirmPassword = null } = userInfo;
    if (password !== confirmPassword && confirmPassword !== null) {
      setErrorMessageVisibility('visible');
    } else {
      setErrorMessageVisibility('hidden');
    }
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
                <div className="authentication-form__error-message" style={{ visibility: errorMessageVisibility }}>
                  <p>Что-то пошло не так :(</p>
                </div>
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

const mapStateToProps = ({ user: { serverIntrectionInfo: { error }}}) => {
  return { error };
}

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    userAuth: (userInfo) => userAuth(dispatch, service, userInfo)
  }
}

export default compose(
  withService,
  connect(mapStateToProps, mapDispatchToProps)
)(AuthenticationForm);