const drawerWidth = 240;

export const openedMixin = (theme) => ({
    marginTop : theme.layout.header,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    height: `calc(100vh - ${theme.layout.header}px)`
  });
  
export const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop : theme.layout.header,
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    height: `calc(100vh - ${theme.layout.header}px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
});