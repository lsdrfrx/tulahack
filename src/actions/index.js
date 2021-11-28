import {
  USER_AUTH_REQUESTED,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE,
  FETCH_SCHEDULE_REQUESTED,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FAILURE,
  FETCH_CHAT_MESSAGES_REQUESTED,
  FETCH_CHAT_MESSAGES_FAILURE,
  FETCH_CHAT_MESSAGES_SUCCESS,
  SEND_MESSAGE
} from './action-types';

const userAuthRequested = () => {
  return {
    type: USER_AUTH_REQUESTED,
  }
};

const userAuthSuccess = (payload) => {
  return {
    type: USER_AUTH_SUCCESS,
    payload
  }
};

const userAuthFailure = (payload) => {
  return {
    type: USER_AUTH_FAILURE,
    payload
  }
};

const fetchScheduleRequested = () => {
  return {
    type: FETCH_SCHEDULE_REQUESTED
  }
};

const fetchScheduleSuccess = (payload) => {
  return {
    type: FETCH_SCHEDULE_SUCCESS,
    payload
  }
};

const fetchScheduleFailure = (payload) => {
  return {
    type: FETCH_SCHEDULE_FAILURE,
    payload
  }
};

const fetchChatMessagesRequested = () => {
  return {
    type: FETCH_CHAT_MESSAGES_REQUESTED
  }
};

const fetchChatMessagesSuccess = (payload) => {
  return {
    type: FETCH_CHAT_MESSAGES_SUCCESS,
    payload
  }
};

const fetchChatMessagesFailure = (payload) => {
  return {
    type: FETCH_CHAT_MESSAGES_FAILURE,
    payload
  }
}

const userAuth = (dispatch, service, userInfo) => {
  dispatch(userAuthRequested());
  service.userAuth(userInfo)
    .then(userInfo => dispatch(userAuthSuccess(userInfo)))
    .catch(err => dispatch(userAuthFailure(err)))
}

const fetchSchedule = (service) => (dispatch, getState) => {
  dispatch(fetchScheduleRequested());
  const { user: { info }} = getState(); 
  service.getSchedule(info.class, info.school)
    .then(schedule => dispatch(fetchScheduleSuccess(schedule)))
    .catch(err => dispatch(fetchScheduleFailure(err)));
}

const fetchChatMessages = (dispatch, service) => {
  dispatch(fetchChatMessagesRequested());
  service.getChatMessages()
    .then(messages => dispatch(fetchChatMessagesSuccess(messages)))
    .catch(err => dispatch(fetchChatMessagesFailure(err)))
}

const sendMessage = (service, text) => (dispatch, getState) => {
  const { user: { info: { name, surname }}} = getState();
  service.sendMessage(name, surname, text)
    .then(() => fetchChatMessages(dispatch, service))
    .catch(err => console.log(err))
}

const abob = () => {}

export {
  userAuth,
  fetchSchedule,
  fetchChatMessages,
  sendMessage,
  abob
}