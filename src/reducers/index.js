import updateUser from "./user";
import updateSchedule from "./schedule";
import updateChat from './chat';

const reducer = (state, action) => {
  return {
    user: updateUser(state, action),
    schedule: updateSchedule(state, action),
    chat: updateChat(state, action)
  }
}

export default reducer;