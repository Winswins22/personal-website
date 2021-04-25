import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SmallText = styled.p`
  font-size: 0.8rem;
  color: white;
`

export const FixedNavbarText = styled.p`
  font-size: 0.8rem;
  color: white;
  text-decoration: none;

  position: fixed;
  left: 0;
  top: 0;
`

export const NavbarBase = styled.div`
  background-color: #11103a;

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

export const NavbarText = styled(Link)`
  font-size: 0.8rem;
  color: white;
  text-decoration: none;
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
  left: 0px;

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
  padding-left:0;
  display: flex;
  flex-direction: column;

  justify-content: center;
  list-style: none;
  text-align: center;
  
  width: 150px;
  height: 100vh;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavbarItem = styled.li`
  font-size: 1.5rem;
`

export const BuildNavbarMenu = ({NavbarItems}) => {
  return (
    NavbarItems.map(navItem => {
      return (
        <NavbarItem> 
          <NavbarText to={navItem.linkTo}>{navItem.text}</NavbarText> 
        </NavbarItem>
      )
    })
  )
}