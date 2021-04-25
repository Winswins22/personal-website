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
          {TripleBarImage.img}
        </TripleLineLogo> 

        <NavbarLogo to={NavbarImage.linkTo}>
          <img src={NavbarImage.img} alt={NavbarImage.alt}></img>
        </NavbarLogo>
        
        <NavbarText style={{textAlign:"center", fontSize:"2rem", paddingBottom:"10px"}}> Winston </NavbarText>
        <NavbarText style={{textAlign:"center", fontSize:"1rem"}}> Web Developer </NavbarText>
        
        <NavbarMenu showSidebar={showSidebar}> <BuildNavbarMenu NavbarItems={NavbarItems}></BuildNavbarMenu> </NavbarMenu>
      </NavbarContainer>

    </NavbarBase>
  )

}

export default Navbar