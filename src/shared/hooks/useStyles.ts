import { makeStyles, createStyles } from '@mui/styles'

export default makeStyles((theme: any) => createStyles({
  root: {
  },
  sideMenuPaper: {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    backgroundColor: `${theme.custom.palette.background.left} !important`,
    '& svg': {
      color: 'white !important'
    },
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'space-between !important'
  }
}))
