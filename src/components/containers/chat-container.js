import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Chat from '../chat';
import { fetchChatMessages } from '../../actions';
import { withService } from '../hoc';
import ErrorMessage from '../error-message';
import LoadingSpinner from '../loading-spinner';
import { compose } from '../../utils';

const ChatContainer = ({ fetchChatMessages, messages, loading, error }) => {
  useEffect(() => {
    fetchChatMessages();
  }, [fetchChatMessages]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return <Chat messages={messages}/>;
};

const mapStateToProps = ({ chat: { messages, loading, error }}) => {
  return { messages, loading, error };
};

const mapDispatchToProps = (dispatch, { service }) => {
  return {
    fetchChatMessages: () => fetchChatMessages(dispatch, service)
  }
};

export default compose(
  withService,
  connect(mapStateToProps, mapDispatchToProps)
)(ChatContainer);