import {FaBars} from 'react-icons/fa'
import Logo from '../../images/logo.png'

export const TripleBarImage = {
  img: <FaBars></FaBars>,
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
    text: "Contact Me",
    linkTo: './contact',
  }
]