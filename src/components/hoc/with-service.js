import React from 'react';

import { ServiceConsumer } from '../service-context';


const withService = (Wrapped) => {
  return (props) => {
    return (
      <ServiceConsumer>
        {
          value => <Wrapped service={value} {...props}/>
        }
      </ServiceConsumer>
    )
  }
}

export default withService;