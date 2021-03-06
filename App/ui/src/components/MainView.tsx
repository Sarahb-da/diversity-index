// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Following from './Following';
import Profile from './Profile';
import Survey from './Survey';
import Analyze from './Analyze';

// USERS_BEGIN
const MainView: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <div className='main-view'>
      <Switch>
        <Route path={`${url}/profile`}>
          <Profile/>
        </Route>
        <Route path={`${url}/network`}>
          <Following/>
        </Route>
        <Route path={`${url}/survey`}>
          <Survey/>
        </Route>
        <Route path={`${url}/analyze`}>
          <Analyze/>
        </Route>
      </Switch>
    </div>
  );
}

export default MainView;
