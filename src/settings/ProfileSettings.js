import React, { useState } from 'react'
import { AddButton, CancelButton, Input, InputLabel } from '../ui-components'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { editUser } from './thunks'

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

function ProfileSettings({ isLoading, currentUser, onSubmitPressed }) {
    const [username, setUsername] = useState("")
    const [usernameRepeat, setUsernameRepeat] = useState("")
    const [password, setPassword] = useState("")
    const content = (
        <>
            <Avatar/>
            <InputLabel htmlFor="in-new-username">New username:</InputLabel>
            <Input id="in-new-username" onChange={(ev) => setUsername(ev.currentTarget.value)}/>
            <InputLabel htmlFor="in-repeat-username">Repeat new username:</InputLabel>
            <Input id="in-repeat-username" onChange={(ev) => setUsernameRepeat(ev.currentTarget.value)}/>
            <InputLabel htmlFor="in-current-pw">Current password:</InputLabel>
            <Input id="in-current-pw" type="password" onChange={(ev) => setPassword(ev.currentTarget.value)}/>
            <ButtonsWrapper>
                <AddButton style={{marginRight: 5}}  onClick={(ev) => {
                    if(username !== usernameRepeat){
                        alert('New username confirmation failed. Try again.')
                        ev.stopPropagation()
                        return;
                    }

                    const request = {
                        username: currentUser.username,
                        newUsername: username,
                        password: password
                    }

                    onSubmitPressed(request)
                }}>
                    Submit
                </AddButton>
                <CancelButton>Cancel</CancelButton>
            </ButtonsWrapper>
        </>
    )

    const loadingMessage = (
        <div>
            Loading...
        </div>
    )

    return isLoading ? loadingMessage : content
}

const mapStateToProps = (state) => ({
    isLoading: state.user.loading,
    currentUser: state.user
})

const mapDispatchToProps = (dispatch) => ({
    onSubmitPressed: (request) => dispatch(editUser(request))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)
