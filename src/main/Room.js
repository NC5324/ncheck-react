import { useParams } from 'react-router-dom'
import { AddButton, Button } from '../ui-components'
import React from 'react'
import styled from 'styled-components'
import RoomItem from './RoomItem'

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

function Room({ title }) {
    let { id } = useParams();
    return (
        <RoomContainer>
            <header style={{
                display: 'flex',
                marginBottom: 10
            }}>
                <h1 className={"opacity-87"}>{ title ? title : `This is room #${id}` }</h1>
                <AddButton style={{marginLeft: 'auto'}}>ADD</AddButton>
                <Button style={{marginLeft: '10px'}}>SELECT</Button>
                <Button style={{marginLeft: '10px'}}>o o o</Button>
            </header>
            <ItemsWrapper>
                { Array.from(Array(3)).map(() => <RoomItem/> )}
            </ItemsWrapper>
        </RoomContainer>
    )
}

export default Room
