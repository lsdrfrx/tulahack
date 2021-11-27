import React, { useMemo } from "react";

import AuthenticationInput from "../authentication-input";

import './authentication-input-row.css';


const AuthenticationInputRow = ({ inputs }) => {

  const renderedInputs = useMemo(() => {
    return inputs.map((input, index) => <AuthenticationInput {...input} key={index}/>)
  }, [inputs]);

  return (
    <div className="authentication-input-row">
      {renderedInputs}
    </div>
  );
}

export default AuthenticationInputRow;