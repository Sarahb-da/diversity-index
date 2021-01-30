import React, { useMemo } from 'react';
import { Segment, Header, Table, Tab } from 'semantic-ui-react';
import { useParty } from '@daml/react';

import { EditIcon } from '../common/Icons'
import { metrics } from '../common/Questions';

const Profile: React.FC = () => {
    const username = useParty();

    return (
      <div className='profile'>
        <Header as='h2'>
            Profile
        </Header>
        <Header>
            <p>Company identifying information.</p>
        </Header>
        <Segment>
            <Header as='h4'>
                Company Name: <b>{username}</b>
            </Header>
            <Header as='h4'>
                Industry Catagory:
            </Header>
            <Header as='h4'>
                Size:
            </Header>
                <Table className='metrics-table' striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                <Header as='h3' className='metrics-table-title'>
                                    Current Diversity Metrics
                                    <EditIcon/>
                                </Header>
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Male
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Female
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {metrics.map(m =>
                            <Table.Row>
                                <Table.Cell>
                                    {m}
                                </Table.Cell>
                                <Table.Cell>
                                    00%
                                </Table.Cell>
                                <Table.Cell>
                                    00%
                                </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
        </Segment>
      </div>
    );
  }

  export default Profile;
