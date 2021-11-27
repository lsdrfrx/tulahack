import { 
  FETCH_CHAT_MESSAGES_REQUESTED,
  FETCH_CHAT_MESSAGES_FAILURE,
  FETCH_CHAT_MESSAGES_SUCCESS,
  SEND_MESSAGE
} from '../actions/action-types';


const initialChat = {
  messages: [],
  loading: true,
  error: false
}

const updateChat = (state, action) => {
  if (state === undefined) {
    return initialChat
  }

  switch(action.type) {
    case FETCH_CHAT_MESSAGES_REQUESTED:
      return {
        ...initialChat
      }

    case FETCH_CHAT_MESSAGES_SUCCESS:
      return {
        messages: action.payload,
        loading: false,
        error: null
      }

    case FETCH_CHAT_MESSAGES_FAILURE:
      return {
        messages: [],
        loading: false,
        error: action.payload
      }

    case SEND_MESSAGE:
      return {
        messages: action.payload,
        loading: false,
        error: null
      }

    default:
      return state.chat
  }
}

export default updateChat;