// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react'
import { Menu, Header, Button } from 'semantic-ui-react'
import MainView from './MainView';
import { useParty } from '@daml/react';

import TopMenu, { IMenuItem }from './TopMenu';

type Props = {
  onLogout: () => void;
}

const MainScreen: React.FC<Props> = ({ onLogout, children }) => {
  const menuItems = [
    {name: 'Profile', url: '/profile'},
    {name: 'Network', url: '/network'},
    {name: 'Survey', url: '/survey'},
    {name: 'Analyze', url: '/analyze'},
  ]

  const [ activeItem, setActiveItem ] = useState<IMenuItem>(menuItems[0])

  return (
    <div className='main-screen'>
      <Menu icon borderless className='site-header'>
        <Menu.Item className='title'>
          <Header as='h1'>
              Diversity Portal
          </Header>
          <Header as='h2'>
            The Diversity Index Portal is a platform for companies to calculating and share
            self-reported diversity metrics.
          </Header>
        </Menu.Item>
        <Menu.Menu position='right' className='logout-menu'>
          <Menu.Item position='right'>
          <Header as='h4'>
            You are logged in as {useParty()}.
          </Header>
          </Menu.Item>
          <Menu.Item
            position='right'
            active={false}
            className='primary'
            onClick={onLogout}
            icon='log out'
            >
              Log out
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <div className='page-body' >
        <TopMenu
          items={menuItems}
          setActiveItem={setActiveItem}
          activeItem={activeItem}/>
        <MainView/>
      </div>
    </div>
  );
};

export default MainScreen;
