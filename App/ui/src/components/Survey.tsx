import React from 'react'
import { useState } from 'react'

import { Form, Segment, Menu, Button, Header} from 'semantic-ui-react'

import { overAll, hiring, training, inclusion, policies, careerDevelopment, metrics }from '../common/Questions'

const Survey = () => {
    const [selectedQuestions, setSelectedQuestions]  = useState('overall')
    return (
        <div className='survey'>
            <Header as='h2'>
                Survey
            </Header>
            <Header>
                <p>Calculate your companies diversity index and share it with your followers.</p>
            </Header>
            <div className='survey-body'>
                <Menu pointing vertical>
                    <Menu.Item
                        name='Overall'
                        active={selectedQuestions === 'overall'}
                        onClick={() => setSelectedQuestions('overall')}
                    />
                    <Menu.Item
                        name='Hiring'
                        active={selectedQuestions === 'hiring'}
                        onClick={() => setSelectedQuestions('hiring')}
                    />
                    <Menu.Item
                        name='Training'
                        active={selectedQuestions === 'training'}
                        onClick={() => setSelectedQuestions('training')}
                    />
                    <Menu.Item
                        name='Inclusion'
                        active={selectedQuestions === 'inclusion'}
                        onClick={() => setSelectedQuestions('inclusion')}
                    />
                    <Menu.Item
                        name='Policies'
                        active={selectedQuestions === 'policies'}
                        onClick={() => setSelectedQuestions('policies')}
                    />
                    <Menu.Item
                        name='Career Development'
                        active={selectedQuestions === 'careerDevelopment'}
                        onClick={() => setSelectedQuestions('careerDevelopment')}
                    />
                    <Menu.Item
                        name='Metrics'
                        active={selectedQuestions === 'metrics'}
                        onClick={() => setSelectedQuestions('metrics')}
                    />
                </Menu>
                <Segment>
                    {selectedQuestions === 'overall' &&
                        <Form>
                            {overAll.map((q, index) =>
                                <Form.Input label={`${index+1}. ${q}`} />
                            )}
                        </Form>
                    }
                    {selectedQuestions === 'hiring' &&
                        <Form>
                            {hiring.map((q, index) =>
                                <Form.Input label={`${index+1}. ${q}`} />
                            )}
                        </Form>
                    }
                    {selectedQuestions === 'training' &&
                        <Form>
                            {training.map((q, index) =>
                                <Form.Input label={`${index+1}. ${q}`} />
                            )}
                        </Form>
                    }
                    {selectedQuestions === 'inclusion' &&
                        <Form>
                            {inclusion.map((q, index) =>
                                <Form.Input label={`${index+1}. ${q}`} />
                            )}
                        </Form>
                    }
                    {selectedQuestions === 'policies' &&
                        <Form>
                            {policies.map((q, index) =>
                                <Form.Input label={`${index+1}. ${q}`} />
                            )}
                        </Form>
                    }
                    {selectedQuestions === 'careerDevelopment' &&
                        <Form>
                            {careerDevelopment.map((q, index) =>
                                <Form.Input label={`${index+1}. ${q}`} />
                            )}
                        </Form>
                    }
                    {selectedQuestions === 'metrics' &&
                        <Form>
                            {metrics.map((q, index) =>
                                <Form.Input label={`${index+1}. ${q}`} />
                            )}
                        </Form>
                    }
                    <Button className='primary'>
                        submit
                    </Button>
                </Segment>
            </div>
        </div>

    )
}
export default Survey;
