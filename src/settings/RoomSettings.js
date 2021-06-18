import React, { useState } from 'react'
import { AddButton, CancelButton, Input, InputLabel } from '../ui-components'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { editRoom } from './thunks'
import Room from '../payload/Room'

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

function RoomSettings({ isLoading, room, currentUser, onSubmitPressed }) {
    const [name, setName] = useState(room.name)
    const [password, setPassword] = useState("")
    const content = (
        <>
            <Avatar/>
            <InputLabel htmlFor="in-new-name">New name for room:</InputLabel>
            <Input id="in-new-name" onChange={(ev) => setName(ev.currentTarget.value)}/>
            <InputLabel htmlFor="in-current-pw">Current password:</InputLabel>
            <Input id="in-current-pw" type="password" onChange={(ev) => setPassword(ev.currentTarget.value)}/>
            <ButtonsWrapper>
                <AddButton style={{marginRight: 5}}  onClick={() => {
                    const request = {
                        username: currentUser.username,
                        password: password,
                        room: new Room(room.id, name, room.items)
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
    currentUser: state.user,
    room: state.rooms.selectedRoom
})

const mapDispatchToProps = (dispatch) => ({
    onSubmitPressed: (request) => dispatch(editRoom(request))
})

export default connect(mapStateToProps, mapDispatchToProps)(RoomSettings)
