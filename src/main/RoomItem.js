import React from 'react'
import styled from 'styled-components'

const RoomItemContainer = styled.div`
  min-height: 150px;
  margin: 5px;

  background: #1D3240;
  border-radius: 5px;
  padding: 10px;
  box-shadow: #121212 0 0 6px;
  
  display: flex;
  flex-direction: column;
`

function RoomItem({item, onSelect}) {
    return (
        <RoomItemContainer onClick={() => onSelect(item.id)}>
            <h3 className={"opacity-87"}>{item.name}</h3>
            <h4 className={"opacity-30"}>Created on dd/mm/yyyy by {item["createdBy"].username.toUpperCase()}</h4>
            <h4 style={{marginTop: 'auto', marginBottom: 'auto'}}>Notes lorem ipsum dolor sit amet something</h4>
            <h4 style={{color: '#FF7070', marginTop: 'auto'}}>Deadline: dd/mm/yyyy</h4>
        </RoomItemContainer>
    )
}

export default RoomItem
