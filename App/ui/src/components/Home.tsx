// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useMemo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Segment, Header } from 'semantic-ui-react';

const Home: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <div className='home'>
      <Segment>
          <Header as='h2'>
                The Diversity Index Portal is a platform for companies to calculating and share
                self-reported diversity metrics.
          </Header>
          <Header as='h3'>

          </Header>
      </Segment>
    </div>
  );
}

export default Home;
