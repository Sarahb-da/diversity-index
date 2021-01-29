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
            <Header>
                <p>Track your followers and follow others to view their rating.</p>
            </Header>
            <Segment>
                <div className='followers'>
                    <Header as='h3'>
                        Followers: {followers.length}
                    </Header>
                    <UserList
                        users={followers}
                        following={myUser?.following ?? []}
                        onFollow={follow}
                        />
                </div>
                <div className='following'>
                    <Header as='h3'>
                        Following: {myUser?.following.length || 0}
                    </Header>
                    <PartyListEdit
                        users={followers}
                        parties={myUser?.following ?? []}
                        onAddParty={follow}
                        />
                </div>
            </Segment>
        </div>
    )
}

export default Following;
