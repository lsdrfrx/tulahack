
const initialUser = {
  info: {
    name: '',
    surname: '',
    age: '',
    class: '',
    email: '',
    school: '',
    password: ''
  },
  progress: { },
  shop: {}
}

const updateUser = (state, action) => {
  if (state === undefined) {
    return initialUser;
  }

  switch(action.type) {
    default:
      return state.user;
  }
};

export default updateUser;