import React, {useState} from 'react'
import {BuildNavbarMenu, NavbarBase, NavbarLogo, TripleLineLogo, NavbarMenu, NavbarText, NavbarContainer} from "./NavabarElems"
import {NavbarImage, TripleBarImage, NavbarItems} from "./Data"

function Navbar(){

  const [showSidebar, updateSidebar] = useState(false)

  const displaySidebar = () => {
    updateSidebar(! showSidebar)
  }

  return (
    <NavbarBase showSidebar={showSidebar}>
      
      <NavbarContainer>
        <TripleLineLogo onClick={displaySidebar} showSidebar={showSidebar}>
          {showSidebar ? TripleBarImage.closeImg : TripleBarImage.openImg}
        </TripleLineLogo> 
        
        <NavbarLogo to={NavbarImage.linkTo} onClick={displaySidebar}>
          <img src={NavbarImage.img} alt={NavbarImage.alt}></img>
        </NavbarLogo>
        
        <NavbarText style={{textAlign:"center", fontSize:"2rem", paddingBottom:"10px"}}> Winston </NavbarText>
        <NavbarText style={{textAlign:"center", fontSize:"1rem"}}> Web Developer </NavbarText>

        <NavbarMenu showSidebar={showSidebar}> 
          <BuildNavbarMenu displaySidebar={displaySidebar} NavbarItems={NavbarItems}></BuildNavbarMenu> 
        </NavbarMenu>

      </NavbarContainer>

    </NavbarBase>
  )

}

export default Navbar