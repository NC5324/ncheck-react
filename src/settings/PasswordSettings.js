import React, { useState } from 'react'
import { AddButton, CancelButton, Input, InputLabel } from '../ui-components'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { editPassword } from './thunks'

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`

function PasswordSettings({ isLoading, currentUser, onSubmitPressed }) {
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [currPassword, setCurrPassword] = useState("")
    const content = (
        <>
            <InputLabel htmlFor="in-new-pw">New password:</InputLabel>
            <Input id="in-new-pw" onChange={(ev) => setPassword(ev.currentTarget.value)}/>
            <InputLabel htmlFor="in-repeat-new-pw">Repeat new password:</InputLabel>
            <Input id="in-repeat-new-pw" onChange={(ev) => setPasswordRepeat(ev.currentTarget.value)}/>
            <InputLabel htmlFor="in-current-pw">Current password:</InputLabel>
            <Input id="in-current-pw" type="password" onChange={(ev) => setCurrPassword(ev.currentTarget.value)}/>
            <ButtonsWrapper>
                <AddButton style={{marginRight: 5}}  onClick={(ev) => {
                    if(password !== passwordRepeat){
                        alert('New password does not match. Try again.')
                        ev.stopPropagation()
                        return;
                    }

                    const request = {
                        username: currentUser.username,
                        password: currPassword,
                        newPassword: password
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
    onSubmitPressed: (request) => dispatch(editPassword(request))
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordSettings)
