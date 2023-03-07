import * as React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import useThemeMode from 'src/shared/hooks/useThemeMode'
import useStyles from 'src/shared/hooks/useStyles'

import {
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  Divider,
  Drawer as MuiDrawer,
  Tooltip,
  useMediaQuery
} from '@mui/material'

import LogoImage from 'src/assets/logo.png'

import { styled } from '@mui/material/styles'
import {
  ExpandLogo,
  ExpandLogoDiv,
  LessLogo,
  LessLogoDiv,
  Logo,
  MenuList
} from './styled/SideMenu.styled'

import { openedMixin, closedMixin } from 'src/utils/helper/mixinHelper'

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: theme.layout.left,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme)
    })
  })
)

const SideBar = (props) => {
  const { open, setOpen, menuList } = props

  const { barMode, onChangeBarMode } = useThemeMode()

  const navigate = useNavigate()

  const classes = useStyles()
  const theme = useTheme()
  const location = useLocation()

  const match680 = useMediaQuery('(min-width : 680px)')

  const [selectedTab, setSelectedTab] = React.useState(1)
  const handleDrawerOpen = () => {
    if (!match680) return

    onChangeBarMode('expanded')
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
    onChangeBarMode('closed')
  }

  React.useEffect(() => {
    // eslint-disable-next-line array-callback-return
    menuList.map((menu, index) => {
      if (location.pathname.search(menu.link) >= 0) {
        setSelectedTab(index)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  React.useEffect(() => {
    if (barMode === 'expanded') setOpen(true)
    else setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barMode])

  React.useEffect(() => {
    if (!match680) {
      setOpen(false)
      onChangeBarMode('closed')
    } else {
      if (barMode === 'expanded') setOpen(true)
      else setOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match680])

  return (
    <>
      {
        <Drawer variant="permanent" open={open} classes={{ paper: classes.sideMenuPaper }}>
          <div>
            <List>
              <ListItem
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: 'center'
                  }}
                >
                  {open ? (
                    <ExpandLogoDiv className={classes.expandUnionDiv}>
                      <ExpandLogo onClick={handleDrawerClose}>
                        <Logo src={LogoImage} />
                      </ExpandLogo>
                    </ExpandLogoDiv>
                  ) : (
                    <LessLogoDiv>
                      <LessLogo onClick={handleDrawerOpen}>
                        <Logo src={LogoImage} />
                      </LessLogo>
                    </LessLogoDiv>
                  )}
                </ListItemIcon>
              </ListItem>
            </List>
            <Divider />
            <MenuList>
              {menuList.map((menu, index) => (
                <Tooltip title={!open ? menu.label : ''} key={menu.label} placement={'right'}>
                  <ListItemButton
                    key={index}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      background: selectedTab === index && 'gray'
                    }}
                    onClick={() => navigate(menu.link)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center'
                      }}
                    >
                      {menu.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={menu.label}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: `${theme.palette.primary.left}`,
                        fontSize: '10px !important'
                      }}
                    />
                  </ListItemButton>
                </Tooltip>
              ))}
            </MenuList>
          </div>
        </Drawer>
      }
    </>
  )
}

export default SideBar
