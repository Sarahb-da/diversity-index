import React, { useMemo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import { Header, Icon, Segment, Divider } from 'semantic-ui-react';
import { Party } from '@daml/types';
import { User } from '@daml.js/app';
import { useParty, useLedger, useStreamFetchByKeys, useStreamQueries } from '@daml/react';
import UserList from './UserList';
import PartyListEdit from './PartyListEdit';

const Following = () => {
    const username = useParty();
    const ledger = useLedger();

    const allUsers = useStreamQueries(User.User).contracts;
    const myUserResult = useStreamFetchByKeys(User.User, () => [username], [username]);

    const myUser = myUserResult.contracts[0]?.payload;
    const follow = async (userToFollow: Party): Promise<boolean> => {
        try {
          await ledger.exerciseByKey(User.User.Follow, username, {userToFollow});
          return true;
        } catch (error) {
          alert(`Unknown error:\n${error}`);
          return false;
        }
      }

    const followers = useMemo(() =>
        allUsers
        .map(user => user.payload)
        .filter(user => user.username !== username)
        .sort((x, y) => x.username.localeCompare(y.username)),
        [allUsers, username]);

    return (
        <div className='following'>
            <Segment>
                <Header as='h3'>
                    Users I'm following
                </Header>
                <Divider />
                <PartyListEdit
                    parties={myUser?.following ?? []}
                    onAddParty={follow}
                    />
            </Segment>
            <Segment>
                <Header as='h2'>
                    <Icon name='globe' />
                    <Header.Content>
                        The Network
                        <Header.Subheader>My followers and users they are following</Header.Subheader>
                    </Header.Content>
                </Header>
                <Divider />
                <UserList
                    users={followers}
                    onFollow={follow}
                    />
            </Segment>
        </div>
    )
}

export default Following;
