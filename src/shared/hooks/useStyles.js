import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  sideMenuPaper: {
    backgroundColor: `${theme.palette.background.left} !important`,
    '& svg': {
      color: `${theme.palette.primary.left} !important`
    },
    display: 'flex !important',
    flexDirection: 'column !important',
    justifyContent: 'space-between !important'
  }
}))
