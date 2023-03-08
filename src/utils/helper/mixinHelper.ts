const drawerWidth = 240

export const openedMixin = (theme: any) => ({
  marginTop: theme.custom.layout.header,
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden',
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  height: `calc(100vh - ${theme.custom.layout.header}px)`
})

export const closedMixin = (theme: any) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginTop: theme.custom.layout.header,
  overflowX: 'hidden',
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  width: `calc(${theme.spacing(7)} + 1px)`,
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  height: `calc(100vh - ${theme.custom.layout.header}px)`,
  [theme.breakpoints.up('sm')]: {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})
