import React from 'react'
import styled from 'styled-components'
import { Button } from '../ui-components'
import SettingsForm from './SettingsForm'
import { useHistory, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../login/actions'

const SettingsNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  /*test*/
  margin: 5% 5px auto 25%;
  
  flex: 0 1 300px;
`

const SettingsNavItem = styled(Button)`
  flex: unset;
  margin: 0 0 5px;
`

function SettingsNav({settingsArray, onLogoutPressed}) {
    const history = useHistory()
    return (
        <>
            <SettingsNavContainer>
                { settingsArray.map((settings, i) => (
                    <SettingsNavItem key={`settings-${i}`} onClick={() => history.push(settings.path)}>
                        { settings.title }
                    </SettingsNavItem>))}
                <Switch>
                    <Route path={"/settings"}>
                        <SettingsNavItem onClick={() => {
                            onLogoutPressed()
                            history.push('/')
                        }}>
                            LOGOUT
                        </SettingsNavItem>
                    </Route>
                    <Route path={"/room-settings"}>
                        <SettingsNavItem onClick={() => {
                            //TODO: Add room deletion stuff
                            history.push('/rooms')
                        }}>
                            DELETE ROOM
                        </SettingsNavItem>
                    </Route>
                </Switch>
            </SettingsNavContainer>
            <SettingsForm/>
        </>
    )
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    onLogoutPressed: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsNav)
