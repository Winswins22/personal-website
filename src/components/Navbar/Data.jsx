import {FaBars} from 'react-icons/fa'

export const NavbarImage = {
  img: <FaBars></FaBars>,
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