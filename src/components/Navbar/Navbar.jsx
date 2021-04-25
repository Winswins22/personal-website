import React, {useState} from 'react'
import {BuildNavbarMenu, NavbarBase, NavbarItem, NavbarLogo, NavbarMenu, NavbarText, SmallText, NavbarContainer} from "./NavabarElems"
import {NavbarImage, NavbarItems} from "./Data"

function Navbar(){

  const [showSidebar, updateSidebar] = useState(false)

  const displaySidebar = () => {
    updateSidebar(! showSidebar)
  }

  return (
    <NavbarBase showSidebar={showSidebar}>
      
      <NavbarContainer>
        <NavbarLogo to={NavbarImage.linkTo} onClick={displaySidebar} showSidebar={showSidebar}>
          {NavbarImage.img}
          {/* <SmallText> Web Developer </SmallText>*/}
        </NavbarLogo> 
        
        <NavbarMenu showSidebar={showSidebar}> <BuildNavbarMenu NavbarItems={NavbarItems}></BuildNavbarMenu> </NavbarMenu>
      </NavbarContainer>

    </NavbarBase>
  )

}

export default Navbar