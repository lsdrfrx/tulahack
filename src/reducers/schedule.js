import {
  FETCH_SCHEDULE_REQUESTED,
  FETCH_SCHEDULE_SUCCESS,
  FETCH_SCHEDULE_FAILURE
} from '../actions/action-types'


const initialSchedule = {
  schedule: [],
  loading: true,
  error: null
};

const updateSchedule = (state, action) => {
  if (state === undefined) {
    return initialSchedule;
  }

  switch(action.type) {
    case FETCH_SCHEDULE_REQUESTED:
      return {
        ...initialSchedule
      }

    case FETCH_SCHEDULE_SUCCESS:
      return {
        schedule: action.payload,
        loading: false,
        error: null
      }

    case FETCH_SCHEDULE_FAILURE:
      return {
        schedule: [],
        loading: false,
        error: action.payload
      }

    default:
      return state.schedule
  }
}

export default updateSchedule;