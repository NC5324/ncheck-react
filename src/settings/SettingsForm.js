import React from 'react'
import styled from 'styled-components'
import { AddButton, CancelButton, Input, InputLabel } from '../ui-components'
import Room from '../payload/Room'
import { Route, Switch } from 'react-router-dom'

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

const Avatar = styled.div`
  background-color: #A3C8FF;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  
  margin-bottom: 10px;
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
                    <Avatar/>
                    <InputLabel htmlFor="in-new-username">New username:</InputLabel>
                    <Input id="in-new-username"/>
                    <InputLabel htmlFor="in-current-pw">Current password:</InputLabel>
                    <Input id="in-repeat-pw"/>
                    <InputLabel htmlFor="in-repeat-pw">Repeat current password:</InputLabel>
                    <Input id="in-repeat-pw"/>
                    <ButtonsWrapper>
                        <AddButton style={{marginRight: 5}}>
                            Submit
                        </AddButton>
                        <CancelButton>Cancel</CancelButton>
                    </ButtonsWrapper>
                </Route>
                <Route exact path="/settings/password">
                    <InputLabel htmlFor="in-repeat-new-pw">New password:</InputLabel>
                    <Input id="in-new-username"/>
                    <InputLabel htmlFor="in-repeat-new-pw">Repeat new password:</InputLabel>
                    <Input id="in-repeat-new-pw"/>
                    <InputLabel htmlFor="in-current-pw">Current password:</InputLabel>
                    <Input id="in-repeat-pw"/>
                    <InputLabel htmlFor="in-repeat-pw">Repeat current password:</InputLabel>
                    <Input id="in-repeat-pw"/>
                    <ButtonsWrapper>
                        <AddButton style={{marginRight: 5}}>
                            Submit
                        </AddButton>
                        <CancelButton>Cancel</CancelButton>
                    </ButtonsWrapper>
                </Route>
            </Switch>
        </SettingsFormContainer>
    )
}

export default SettingsForm
