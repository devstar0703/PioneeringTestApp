import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Drawer, List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'

import { createStyles, makeStyles, useTheme } from '@mui/styles'
import { type IMenuItem } from 'src/types/types'

const useStyles = makeStyles((theme: any) => createStyles({
  drawerPaper: {
    width: '100vw',
    zIndex: '10000 !important',
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    marginTop: `${theme.custom.layout.header}px !important`,

    '& .MuiListItemButton-root': {
      margin: 10,
      borderRadius: '10px !important'
    }
  }
}))

interface MobileMenuProps {
  open: boolean
  handleClose: () => void
  menuList: IMenuItem[]
}

const MobileMenu = ({
  open,
  handleClose,
  menuList
}: MobileMenuProps) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const theme: any = useTheme()

  const handleGotoMenu = (link: string) => {
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
            onClick={() => { handleGotoMenu(menu.link) }}
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
              sx={{ opacity: open ? 1 : 0, color: theme.custom.palette.primary.left }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  )
}

export default MobileMenu
