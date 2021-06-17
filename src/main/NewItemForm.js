import React, { useState } from 'react'
import styled from 'styled-components'
import { AddButton, CancelButton, Input, InputLabel } from '../ui-components'
import { connect } from 'react-redux'
import { creatingItemFailure } from './actions'
import { addItemToRoom } from './thunks'
import Item from '../payload/Item'

const FormWrapper = styled.div`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  
  display: flex;
  
  background: rgba(0, 0, 0, 0.7);
`

const FormContainer = styled.div`
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

function NewItemForm({ room, creatingItem, onCancel, onSubmit }) {
    const [itemName, setItemName] = useState(null)
    return creatingItem ? (
        <FormWrapper onClick={(ev) => {
            if(ev.currentTarget === ev.target)
                onCancel()
        }}>
            <FormContainer>
                <Heading className={"opacity-87"}>Create new item</Heading>
                <InputLabel htmlFor={"in-item-title"}>Enter name:</InputLabel>
                <Input id={"in-item-title"}
                       onChange={(ev) => setItemName(ev.currentTarget.value)}/>
                <ButtonsWrapper>
                    <AddButton style={{marginRight: 5}}
                               onClick={() => {
                                   onSubmit(new Item(null, itemName, {}), room)
                               }}>
                        Submit
                    </AddButton>
                    <CancelButton onClick={() => onCancel()}>Cancel</CancelButton>
                </ButtonsWrapper>

                <ExitButton onClick={() => onCancel()}>X</ExitButton>
            </FormContainer>
        </FormWrapper>
    ) : null
}

const mapStateToProps = (state) => ({
    creatingItem: state.rooms.creatingItem,
    room: state.rooms.selectedRoom
})

const mapDispatchToProps = (dispatch) => ({
    onCancel: () => dispatch(creatingItemFailure()),
    onSubmit: (item, room) => dispatch(addItemToRoom(item, room)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewItemForm)
