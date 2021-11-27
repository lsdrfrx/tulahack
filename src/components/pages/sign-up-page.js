import React, { useMemo } from "react";

import Authentication from "../authentication";

const SignUpPage = () => {

  const inputs = useMemo(() => {
    return [
      [{ label: 'Имя', name: 'name' }, { label: 'Фамилия', name: 'surname' }],
      [{ label: 'Возраст', name: 'age' }, { label: 'Класс', name: 'class' }],
      [{ label: 'Почта', name: 'email' }, { label: 'Школа', name: 'school' }],
      [{ label: 'Пароль', type: 'password', name: 'password' }], 
      [{ label: 'Подтвердите пароль', type: 'password', name: 'confirmPassword' }]
    ]
  }, []);

  return <Authentication inputs={inputs} buttonText={'Зарегистрироваться'}/>;
}

export default SignUpPage;