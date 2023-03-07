import useWorkList from 'src/shared/hooks/useWorkList'
import { useTheme } from '@mui/styles'

import tagStyled from 'styled-components'

import { ListItem } from '@mui/material'
import { StyledList } from 'src/shared/styled'

const WorkList = () => {
  const { workList } = useWorkList()

  const theme = useTheme()

  return (
    <WorkListMain theme={theme}>
      <StyledList>
        {workList.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </StyledList>
    </WorkListMain>
  )
}

export default WorkList

const WorkListMain = tagStyled.div`
    color: ${(props) => props.theme.palette.primary.content} !important;
    width: 400px;

    @media screen and (max-width: 485px) {
        width : 350px;
    }

    @media screen and (max-width: 370px) {
        width : 300px;
    }

    @media screen and (max-width: 315px) {
        width : 250px;
    }
`
