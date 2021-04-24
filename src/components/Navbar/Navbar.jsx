import React, {useState} from 'react'
import {BuildNavbarMenu, NavbarBase, NavbarItem, NavbarLogo, NavbarMenu, NavbarText, SmallText} from "./NavabarElems"
import {NavbarImage, NavbarItems} from "./Data"

function Navbar(){

  const [showSidebar, updateSidebar] = useState(true)

  const displaySidebar = () => {
    updateSidebar(! showSidebar)
  }

  return (
    <NavbarBase>

      <NavbarLogo to={NavbarImage.linkTo} onClick={displaySidebar} showSidebar={showSidebar}>
        {NavbarImage.img}
        {/* <SmallText> Web Developer </SmallText>*/}
      </NavbarLogo> 
      
        {
          (showSidebar === true) ?
            <NavbarMenu> <BuildNavbarMenu NavbarItems={NavbarItems}></BuildNavbarMenu> </NavbarMenu>

          : <></>
        }
      

    </NavbarBase>
  )

}

export default Navbar