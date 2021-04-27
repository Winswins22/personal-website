import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../../images/logo.png'

export const TripleBarImage = {
  openImg: <FaBars size={100}></FaBars>,
  closeImg: <FaTimes size={100}></FaTimes>,
  alt: "Triple Bars Navbar Toggle",
}

export const NavbarImage = {
  img: Logo,
  alt: "Home Logo",
  linkTo: './',
}

export const NavbarItems = [
  {
    text: "About",
    linkTo: './about',
  },
  {
    text: "Skills",
    linkTo: './skills',
  },
  {
    text: "Contact",
    linkTo: './contact',
  }
]