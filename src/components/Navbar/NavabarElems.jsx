import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SmallText = styled.p`
  font-size: 0.8rem;
  color: white;
`

export const NavbarBase = styled.div`
  width: 150px;
  display: flex;
  background-color: #11103a;
  flex-direction: column;
  margin-top: -9px;
  margin-left: -9px;

  @media screen and (max-width: 960px){
    background-color: transparent;
  }
`

export const NavbarText = styled.p`
  font-size: 0.8rem;
  color: white;
  text-decoration: none;
`

export const NavbarLogo = styled(Link)`
  display: flex;
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
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({showSidebar}) => (showSidebar ? 0 : '-100%')}; //slides the mobile nav bar over when icon is clicked
    opacity: 1;
    transition: all 0.5s ease;
  }
`


export const NavbarItem = styled(Link)`
  font-size: 1.5rem;
  text-align: center;
  background-color: blue;
`

export const BuildNavbarMenu = ({NavbarItems}) => {
  return (
    NavbarItems.map(navItem => {
      return (
        <NavbarItem to={navItem.linkTo}> 
          <NavbarText>{navItem.text}</NavbarText> 
        </NavbarItem>
      )
    })
  )
}