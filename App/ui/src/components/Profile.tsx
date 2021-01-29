import React, { useMemo } from 'react';
import { Segment, Header, Table, Tab } from 'semantic-ui-react';
import { useParty } from '@daml/react';

import { EditIcon } from '../common/Icons'
const Profile: React.FC = () => {
    const username = useParty();

    const overAll =  [
        'leadership encourages diversity? ex. CEO making a public commitment',
        'leadership take action to deomonstrate importance of diversity?',
        'culture allows people to be themselves?',
        'company values individual differences?',
        'leadership treats employees fairly?',
        ' distributes employee engagement surveys?',
        'anual diversity report, or willing to release one?'
    ]

    const hiring = [
        'company takes action to seek diverse candidate pool?',
        'job interviews are conducted by a diverse group of individuals?',
        'outward-facing language that explicitly states a commitment to diversity?'
    ]

    const metrics = [
        'percentage of women company level',
        'percentage of women  leadership level',
        'percentage of women  tech (or per department)',
        'percentage of women board level'
    ]

    const training = [
        'company provides educational programs that promote diversity and inclusion'
    ]

    const inclusion = [
        'Gender bias slurs or jokes are not tolerated'
    ]

    const policies = [
        'Policies and Procedures encourage diversity and inclusion',
        'company is equipped to take action in response to discrimination or gender bias',
        'employees are aware of how to report incidents of discrimination or gender bias/ there are multiple anonymous avenues to do so',
        'gender policies?',
        'anonymous D&I reporting?'
    ]

    const careerDevelopment = [
        'all employees are encouraged to apply for higher positions',
        'gender does not effect internal promotion process'
    ]

    return (
      <div className='profile'>
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
