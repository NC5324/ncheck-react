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

export const CancelButton = styled(ButtonTemplate)`
  background-color: darkred;
  :hover {
    background-color: red;
  }
`

export const Input = styled.input`
  padding: 15px;
  margin-bottom: 10px;
  
  outline: #A3C8FF;
  border: none;
  border-radius: 5px;

  font-size: 16px;

  background: #171F25;
  color: white;
`

export const InputLabel = styled.label`
  margin-bottom: 5px;
  opacity: 0.87;
`
