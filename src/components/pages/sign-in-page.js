import React, { useMemo } from "react";

import Authentication from "../authentication";

const SignInPage = () => {

  const inputs = useMemo(() => {
    return [
      [{ label: 'Имя', name: 'name'}, { label: 'Фамиля', name: 'surname' }],
      [{ label: 'Почта', name: 'email'}],
      [{ label: 'Пароль', type: 'password', name: 'password'}]
    ]
  }, []);

  return <Authentication inputs={inputs} buttonText={'Войти'}/>;
}

export default SignInPage;