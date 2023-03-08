import * as React from 'react'

import { useTheme } from '@mui/styles'
import LogoImage from 'src/assets/logo.png'

import { IconButton, useMediaQuery } from '@mui/material'

import tagStyled from 'styled-components'
import { MenuOutlined } from '@mui/icons-material'

import MobileMenu from './MobileMenu'
import { type IMenuItem } from 'src/types/types'

interface HeaderProps {
  menuList: IMenuItem[]
}
const Header = ({ menuList }: HeaderProps) => {
  const theme = useTheme()

  const match450 = useMediaQuery('(min-width : 450px)')
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false)

  React.useEffect(() => {
    if (match450) setOpenMobileMenu(false)
  }, [match450])

  return (
    <>
      <HeaderDiv theme={theme}>
        {match450
          ? (
          <Text>Pioneering Programmers Test App</Text>
            )
          : (
          <>
            <Logo src={LogoImage} />
            <IconButton onClick={() => { setOpenMobileMenu(!openMobileMenu) }}>
              <MenuOutlined />
            </IconButton>
          </>
            )}
      </HeaderDiv>

      <MobileMenu
        open={openMobileMenu}
        handleClose={() => { setOpenMobileMenu(false) }}
        menuList={menuList}
      />
    </>
  )
}

export default Header

const Logo = tagStyled.img`
    border-radius : 50%;
    width : 50px;
    height : 50px;
`
const HeaderDiv = tagStyled.div`
    display : flex;
    justify-content : flex-start;

    @media screen and (max-width : 450px) {
        justify-content : space-between;
    }

    align-items : center;

    padding-right : 20px;
    padding-left : 20px;

    height : ${(props) => props.theme.custom.layout.header}px;
    width : 100%;
    
    background : ${(props) => props.theme.custom.palette.background.top};
    color : ${(props) => props.theme.custom.palette.primary.top};

    position : fixed;
    left : 0px;
    top : 0px;
    z-index : 100000;
`
const Text = tagStyled.p`
    font-size: 25px;
`
