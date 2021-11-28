import {
  USER_AUTH_REQUESTED,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE
} from '../actions/action-types';


const initialUser = {
  info: {
    userid: null,
    name: '',
    surname: '',
    age: '',
    class: '',
    email: '',
    school: '',
    avatar: null
  },

  progress: [
    { label: 'Информация', value: 40 },
    { label: 'Посты', value: 20 },
    { label: 'Профиль', value: 100 },
    { label: 'Оценки', value: 70 },
  ],

  shop: { },
  
  serverIntrectionInfo: {
    loading: true,
    error: null
  }
}

const updateUser = (state, action) => {

  if (state === undefined) {
    return initialUser;
  }

  switch(action.type) {

    case USER_AUTH_REQUESTED:
      return {
        ...state.user,
        serverIntrectionInfo: {
          loading: true,
          error: null
        }
      }

    case USER_AUTH_SUCCESS:
      return {
        ...action.payload,          // ждём объект со структурой initialUser
        serverIntrectionInfo: {
          loading: false,
          error: null
        }
      }

    case USER_AUTH_FAILURE:
      return {
        ...initialUser,
        serverIntrectionInfo: {
          loading: false,
          error: action.payload
        }
      }

    default:
      return state.user;
  }
};

export default updateUser;