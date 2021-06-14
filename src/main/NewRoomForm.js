import React, { useState } from 'react'
import styled from 'styled-components'
import { AddButton, CancelButton, Input, InputLabel } from '../ui-components'
import { connect } from 'react-redux'
import { creatingRoomFailure } from './actions'
import { createRoom } from './thunks'
import Room from '../payload/Room'

const NewRoomFormWrapper = styled.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  
  display: flex;
  
  background: rgba(0, 0, 0, 0.7);
`

const NewRoomFormContainer = styled.div`
  min-height: 300px;
  
  flex: 0 1 600px;
  
  max-width: calc(100% - 10px);
  max-height: calc(100% - 10px);
  
  margin: auto;
  padding: 10px;
  
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  background: #1D3240;
  box-shadow: #121212 0 0 6px;
  
  position: relative;
`

const Heading = styled.h2`
  margin-bottom: 10px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  
  margin-top: auto;
`

const ExitButton = styled.div`
  height: 50px;
  width: 50px;
  
  position: absolute;
  top: 10px; right: 10px;
  
  font-weight: bold;
  text-align: right;
  cursor: pointer;
  :hover {
    color: red;
  }
`

function NewRoomForm({ creatingRoom, onCancel, onSubmit }) {
    const [roomName, setRoomName] = useState(null)
    return creatingRoom ? (
        <NewRoomFormWrapper onClick={(ev) => {
            if(ev.currentTarget === ev.target)
                onCancel()
        }}>
            <NewRoomFormContainer>
                <Heading className={"opacity-87"}>Create room</Heading>
                <InputLabel htmlFor={"in-room-title"}>Enter name:</InputLabel>
                <Input id={"in-room-title"}
                       onChange={(ev) => setRoomName(ev.currentTarget.value)}/>
                <ButtonsWrapper>
                    <AddButton style={{marginRight: 5}}
                               onClick={() => {
                                   onSubmit(new Room(null, roomName, []))
                               }}>
                        Submit
                    </AddButton>
                    <CancelButton onClick={() => onCancel()}>Cancel</CancelButton>
                </ButtonsWrapper>

                <ExitButton onClick={() => onCancel()}>X</ExitButton>
            </NewRoomFormContainer>
        </NewRoomFormWrapper>
    ) : null
}

const mapStateToProps = (state) => ({
    creatingRoom: state.rooms.creatingRoom
})

const mapDispatchToProps = (dispatch) => ({
    onCancel: () => dispatch(creatingRoomFailure()),
    onSubmit: (room) => dispatch(createRoom(room))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewRoomForm)
