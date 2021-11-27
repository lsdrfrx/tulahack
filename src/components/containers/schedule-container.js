import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Schedule from '../schedule';
import { fetchSchedule } from '../../actions';
import { withService } from '../hoc';
import ErrorMessage from '../error-message';
import LoadingSpinner from '../loading-spinner';
import { compose } from '../../utils';

const ScheduleContainer = ({ fetchSchedule, schedule, loading, error }) => {

  useEffect(() => {
    fetchSchedule();
  }, [fetchSchedule]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return <Schedule schedule={schedule}/>;
};

const mapStateToProps = ({ schedule: { schedule, loading, error } }) => {
  return { schedule, loading, error };
};

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    fetchSchedule: () => dispatch(fetchSchedule(service))
  }
};

export default compose(
  withService,
  connect(mapStateToProps, mapDispatchToProps)
)(ScheduleContainer);