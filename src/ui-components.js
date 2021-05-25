import styled from 'styled-components'

export const ButtonTemplate = styled.button`
  padding: 10px;
  margin-top: auto;
  margin-bottom: auto;
  
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: #121212 0 0 6px;
  
  flex: 0 1 130px;
  height: min-content;
  font-weight: bolder;

  cursor: pointer;
`

export const Button = styled(ButtonTemplate)`
  background-color: #1D3240;
  :hover {
    background-color: #203B4E;
  }
`

export const AddButton = styled(ButtonTemplate)`
  background-color: #467C46;
  :hover {
    background-color: #417341;
  };
`
