import styled from 'styled-components'

export const PageWrapper = styled.div`
  /* position: fixed;
  top: 0; */

  margin-left: 150px;

  @media screen and (max-width: 960px){
    margin-left: 0px;
    margin-top: 100px; // put content below mobile navbar icon
  }
`

export const DesktopOnlyPageWrapper = styled.div`

  @media screen and (min-width: 960px){
    margin-left: 150px;
  }

`