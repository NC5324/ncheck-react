// import { useParams } from 'react-router-dom'
import { AddButton, Button, CancelButton } from '../ui-components'
import React from 'react'
import styled from 'styled-components'
import RoomItem from './RoomItem'
import { connect } from 'react-redux'
import { addToSelection, beginSelection, cancelSelection, creatingItem } from './actions'

const ItemsWrapper = styled.main`
  max-height: 100%;

  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: auto;
`

const RoomContainer = styled.div`
  flex: 1 0 50%;
  margin: 5px 5px 0 0;

  background: #1A2A34;
  border-radius: 5px;
  padding: 10px;
  box-shadow: #121212 0 0 6px;

  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 900px) {
    display: none;
    margin: 5px 5px 0 5px;
  }
`

const SelectionBar = styled.div`
  min-height: 50px;
  margin: auto 5px 5px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: #121212 0 0 6px;
  background-color: #1D3240;
  display: ${props => props.selectionOngoing ? 'flex' : 'none'}
`

function Room({ title, room, onAddPressed, onSelectPressed, selectionOngoing, onSelectionAdded, selectionLength, onSelectionCancel }) {
    // let { id } = useParams();
    return (
        <RoomContainer>
            <header style={{
                display: 'flex',
                marginBottom: 10
            }}>
                <h1 className={"opacity-87"}>{ title ? title : room.name }</h1>
                <AddButton style={{marginLeft: 'auto'}}
                           onClick={() => onAddPressed()}>ADD</AddButton>
                <Button style={{marginLeft: '10px'}}
                        onClick={() => onSelectPressed()}>SELECT</Button>
                <Button style={{marginLeft: '10px'}}>o o o</Button>
            </header>
            <ItemsWrapper>
                { room.items.map(item =>
                    <RoomItem key={`item-${item.id}`}
                              onSelect={onSelectionAdded}
                              item={item}
                    />)
                }
            </ItemsWrapper>
            <SelectionBar selectionOngoing={selectionOngoing}>
                <span style={{margin: 'auto 0', fontWeight: 'bolder'}}>{ selectionLength } items selected</span>
                <CancelButton style={{marginLeft: 'auto'}} onClick={onSelectionCancel}>Cancel</CancelButton>
            </SelectionBar>
        </RoomContainer>
    )
}

const mapStateToProps = (state) => ({
    room: state.rooms.selectedRoom,
    selectionLength: state.rooms.selectedRoom.selectedItems.length,
    selectionOngoing: state.rooms.selectedRoom.selectionOngoing
})

const mapDispatchToProps = (dispatch) => ({
    onAddPressed: () => dispatch(creatingItem()),
    onSelectPressed: () => dispatch(beginSelection()),
    onSelectionAdded: (id) => dispatch(addToSelection(id)),
    onSelectionCancel: () => dispatch(cancelSelection())
})

export default connect(mapStateToProps, mapDispatchToProps)(Room)
