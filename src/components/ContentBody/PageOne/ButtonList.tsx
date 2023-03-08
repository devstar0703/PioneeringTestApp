import useWorkList from 'src/shared/hooks/useWorkList'
import { useQueryClient } from '@tanstack/react-query'

import tagStyled from 'styled-components'
import { StyledButton } from 'src/shared/styled'

import { type WorkListProps } from 'src/types/hooks.types'

const ButtonList = () => {
  const {
    countOfBtn,
    pushWorkReg,

    changeCountofBtn
  } = useWorkList() as WorkListProps

  const queryClient = useQueryClient()

  const addButton = () => {
    pushWorkReg(`Button ${Number(countOfBtn) + 1} was added.`)
    changeCountofBtn()
    queryClient.invalidateQueries({ queryKey: ['getWorkList'] })
  }

  const clickButton = (index: number) => {
    pushWorkReg(`Button ${Number(index) + 1} clicked.`)
  }

  return (
    <ButtonListMain
      data-testid='button_list_main'
    >
      {[...Array(Number(countOfBtn))].map((item, index) => (
        <StyledButton key={index} onClick={() => { clickButton(index) }}>
          Button {index + 1}
        </StyledButton>
      ))}
      <StyledButton onClick={addButton} data-testid='add_button'>Add Button {Number(countOfBtn) + 1}</StyledButton>
    </ButtonListMain>
  )
}

export default ButtonList

const ButtonListMain = tagStyled.div`
    padding-top : 10px;
    display : flex;
    flex-direction : column;
    gap : 10px;
`
