import React, {useState} from 'react'
import {BuildNavbarMenu, NavbarBase, NavbarItem, NavbarLogo, NavbarMenu, NavbarText, SmallText} from "./NavabarElems"
import {NavbarImage, NavbarItems} from "./Data"

function Navbar(){

  const [showSidebar, updateSidebar] = useState(false)

  const displaySidebar = () => {
    updateSidebar(! showSidebar)
  }

  return (
    <NavbarBase>

      <NavbarLogo to={NavbarImage.linkTo} onClick={displaySidebar}>
        {NavbarImage.img}
        {/* <SmallText> Web Developer </SmallText>*/}
      </NavbarLogo> 
      
        {
          (showSidebar === true) ?
            <NavbarMenu showSidebar={showSidebar}> <BuildNavbarMenu NavbarItems={NavbarItems}></BuildNavbarMenu> </NavbarMenu>
          : 
            <></>
        }
      

    </NavbarBase>
  )

}

export default Navbar