import React from 'react'
import styled from 'styled-components'
import { Button } from '../ui-components'
import SettingsForm from './SettingsForm'
import { useHistory, Route, Switch, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../login/actions'
import { deleteRoom } from '../main/thunks'

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

function SettingsNav({ settingsArray, onLogoutPressed, onDeletePressed }) {
    const history = useHistory()
    const { roomId } = useParams()
    return (
        <>
            <SettingsNavContainer>
                { settingsArray.map((settings, i) => (
                    <SettingsNavItem key={`settings-${i}`} onClick={() => history.push(settings.path)}>
                        { settings.title }
                    </SettingsNavItem>))}
                <Switch>
                    <Route exact path={"/settings"}>
                        <SettingsNavItem onClick={() => {
                            onLogoutPressed()
                            history.push('/')
                        }}>
                            LOGOUT
                        </SettingsNavItem>
                    </Route>
                    <Route path={"/rooms/:roomId/settings"}>
                        <SettingsNavItem onClick={() => {
                            //TODO: Add room deletion stuff
                            onDeletePressed(roomId)
                            history.push('/room')
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
    onLogoutPressed: () => dispatch(logout()),
    onDeletePressed: (roomId) => dispatch(deleteRoom(roomId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsNav)
