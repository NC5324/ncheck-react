import React from 'react'
import styled from 'styled-components'
import { AddButton, CancelButton, Input, InputLabel } from '../ui-components'
import Room from '../payload/Room'
import { Route, Switch } from 'react-router-dom'
import ProfileSettings from './ProfileSettings'
import PasswordSettings from './PasswordSettings'

const SettingsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;

  background-color: #1D3240;
  border-radius: 5px;
  box-shadow: #121212 0 0 6px;

  /*test*/
  margin: 5% auto auto 5px;
  padding: 10px;
  flex: 0 1 500px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`

function SettingsForm() {
    return (
        <SettingsFormContainer>
            <Switch>
                <Route exact path="/settings">
                    <ProfileSettings/>
                </Route>
                <Route exact path="/settings/password">
                    <PasswordSettings/>
                </Route>
            </Switch>
        </SettingsFormContainer>
    )
}

export default SettingsForm
