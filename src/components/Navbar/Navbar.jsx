import React from 'react'
import {NavbarItem, NavbarLogo, SmallText} from "./NavabarElems"
import {NavbarImage, NavbarItems} from "./Data"

class Navbar extends React.Component {
  render (){
    return (
      <>
        <NavbarLogo to={NavbarImage.linkTo}>
          {NavbarImage.img}
        </NavbarLogo>
        <SmallText> Web Developer </SmallText>

        {
          NavbarItems.map(navItem => {
            return (<NavbarItem to={navItem.linkTo}> {navItem.text} </NavbarItem>)
          })
        }
      </>
    )
  }
}

export default Navbar