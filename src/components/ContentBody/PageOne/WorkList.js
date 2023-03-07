import useWorkList from 'src/shared/hooks/useWorkList'
import { useTheme } from '@mui/styles'

import tagStyled from 'styled-components'

import { ListItem } from '@mui/material'
import { StyledList } from 'src/shared/styled'
import { CloseOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'

const WorkList = () => {
  const { workList, removeWorkReg } = useWorkList()

  const theme = useTheme()

  return (
    <WorkListMain theme={theme}>
      <StyledList>
        {workList.map((item, index) => (
          <ListItem key={index}>
            {item}
            <IconButton onClick={() => removeWorkReg(index)} color="error">
              <CloseOutlined />
            </IconButton>
          </ListItem>
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
