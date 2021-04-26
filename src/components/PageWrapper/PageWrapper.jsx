import styled from 'styled-components'

const PageWrapper = styled.div`
  margin-left: 150px;

  @media screen and (max-width: 960px){
    margin-left: 0px;
    margin-top: 100px; // put content below mobile navbar icon
  }
`

export default PageWrapper
