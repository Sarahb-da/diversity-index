// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const Analyze: React.FC = () => {
  return (
    <div className='home'>
      <Segment>
          <Header as='h2'>
                Your Diversity Index:  5
          </Header>
          <Header as='h3'>
                Where you stand compared to your peers..
          </Header>
          <Segment>
              <br/>
              <br/>
              <br/>
              <br/>
          </Segment>
          <Header as='h3'>
                Room for improvement..
          </Header>
          <Segment>
              <br/>
              <br/>
              <br/>
              <br/>
          </Segment>
      </Segment>
    </div>
  );
}

export default Analyze;
