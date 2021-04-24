import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SmallText = styled.p`
  font-size: 0.8rem;
`

export const NavbarBase = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  background-color: #11103a;
  justify-content: space-between;
`

export const NavbarLogo = styled(Link)`
  display: flex;
`

export const NavbarItem = styled(Link)`
  font-size: 1.5rem;
  align-items: center;
`