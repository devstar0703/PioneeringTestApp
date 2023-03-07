import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Drawer, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'

import { makeStyles, useTheme } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: '100vw',
    backgroundColor: `${theme.palette.background.left} !important'`,
    zIndex: '10000 !important',
    marginTop: `${theme.layout.header}px !important`,

    '& .MuiListItemButton-root': {
      margin: 10,
      borderRadius: '10px !important'
    }
  }
}))

const MobileMenu = (props) => {
  const { open, handleClose, menuList } = props

  const classes = useStyles()
  const navigate = useNavigate()
  const theme = useTheme()

  const handleGotoMenu = (link) => {
    handleClose()
    navigate(link)
  }
  return (
    <Drawer
      anchor="left"
      variant="persistent"
      onClose={handleClose}
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <List>
        {menuList.map((menu, index) => (
          <ListItemButton
            key={index}
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5
            }}
            onClick={() => handleGotoMenu(menu.link)}
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
              sx={{ opacity: open ? 1 : 0, color: theme.palette.primary.left }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}

export default MobileMenu
