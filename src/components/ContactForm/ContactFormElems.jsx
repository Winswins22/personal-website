import styled from 'styled-components'

export const FormInput = styled.input`
  background-color: #353547;
  width: 100%;

  color: white;
  font-size: 1.5rem;

  padding: 5px;
`

export const FormInputBox = styled.textarea`
  background-color: #353547;
  width: 100%;

  color: white;
  font-size: 1.5rem;

  padding: 5px;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50vw;

  @media screen and (max-width: 960px){
    width: 100vw;
  }
`

export const FormItem = styled.div`
  margin: 5px;
`

export const FormButton = styled.input`
  padding: 10px;
  
  background-color: #353547;

  color: white;
  font-size: 1.5rem;

  :hover{
    transition: background-color 0.5s ease;
    background-color: #1c1b5e;
  }
`