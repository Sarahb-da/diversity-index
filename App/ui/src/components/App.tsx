import React from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import DamlLedger from '@daml/react'

import Credentials, { storeCredentials, retrieveCredentials } from '../Credentials'
import { httpBaseUrl } from '../config'

import LoginScreen from './LoginScreen'
import MainScreen from './MainScreen'

/**
 * React component for the entry point into the application.
 */
// APP_BEGIN
const App: React.FC = () => {
  const [credentials, setCredentials] = React.useState<Credentials | undefined>(retrieveCredentials());

  const handleCredentials = (credentials?: Credentials) => {
    setCredentials(credentials);
    storeCredentials(credentials);
  }

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LoginScreen onLogin={handleCredentials}/>
          </Route>

          <Route path='/:username' render={() => {
            return credentials
              ? <DamlLedger
                  reconnectThreshold={0}
                  token={credentials.token}
                  party={credentials.party}
                  httpBaseUrl={httpBaseUrl}
                >
                  <MainScreen onLogout={() => handleCredentials(undefined)}/>
              </DamlLedger>
              : <Redirect to='/'/>
            }}>
          </Route>
        </Switch>
      </Router>
    </div>

  )
}
// APP_END

export default App;
