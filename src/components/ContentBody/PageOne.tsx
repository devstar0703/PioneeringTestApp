import MessageBox from 'src/components/ContentBody/PageOne/MessageBox'
import ThemeSelector from 'src/components/ContentBody/PageOne/ThemeSelector'
import ButtonList from 'src/components/ContentBody/PageOne/ButtonList'
import WorkList from 'src/components/ContentBody/PageOne/WorkList'

import { Grid, useMediaQuery } from '@mui/material'

const PageOne = () => {
  const match1020 = useMediaQuery('(min-width : 1020px)')

  return (
    <Grid container spacing={5}>
      <Grid item xs={match1020 ? 5 : 12}>
        <ThemeSelector />
        <MessageBox />
        <ButtonList />
      </Grid>
      <Grid item xs={match1020 ? 7 : 12}>
        <WorkList />
      </Grid>
    </Grid>
  )
}

export default PageOne
