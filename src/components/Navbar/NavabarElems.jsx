import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SmallText = styled.p`
  font-size: 0.8rem;
  color: white;
`



export const NavbarBase = styled.div`
  background-color: #0b0a21;

  position: fixed;
  top: 0px;
  left: 0px;

  @media screen and (max-width: 960px) {
    width: 100%;
    left: ${({showSidebar}) => (showSidebar ? 0 : '-100%')}; //slides the mobile nav bar over when icon is clicked
    transition: all 0.5s ease;
  }
`

export const NavbarContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavbarText = styled.p`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0;
  padding: 0;

  /* padding-left: 5px;
  padding-right: 5px; */
  border-left: 5px solid #1c1b5e;
  border-right: 5px solid #1c1b5e;

  /* @media screen and (max-width:960px){
    padding-left: 5px;
    padding-right: 25px;
  } */
`

export const NavbarLogo = styled(Link)`
  @media screen and (max-width: 960px){
    margin-left: calc(50vw - 75px); // 75px - half the size of the logo
    margin-right: calc(50vw - 75px); 
  }
`

export const TripleLineLogo = styled(Link)`
  position: fixed;
  top: 0px;
  right: 0px;

  display: none;

  @media screen and (max-width: 960px){
    display: fixed;
  }

`

// export const NavbarMenu = styled.div`
//   display:flex;
//   height: 100vh;
//   justify-content: center;
//   flex-direction: column;

//   @media screen and (max-width: 960px){
//     ${({showSidebar}) => (showSidebar ? console.log("Active") : "")}
//     transition: all 0.5s ease;
//     transform: ${({showSidebar}) => (showSidebar ? "translate(120px, 120px)" : "translate(-120px, -120px)")} ;
//   }
// `

export const NavbarMenu = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;

  justify-content: center;
  list-style: none;
  text-align: center;
  
  width: 150px;
  height: calc(100vh - 150px); // 150px-height of logo

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavbarItem = styled(Link)`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;

  border-top: 5px solid #1c1b5e;
  border-bottom: 5px solid #1c1b5e;
`

export const BuildNavbarMenu = ({NavbarItems, displaySidebar}) => {
  return (
    NavbarItems.map(navItem => {
      return (
        <NavbarItem to={navItem.linkTo}> 
          <NavbarText onClick={displaySidebar}>{navItem.text}</NavbarText> 
        </NavbarItem>
      )
    })
  )
}