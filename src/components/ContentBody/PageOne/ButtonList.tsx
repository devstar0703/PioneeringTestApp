import useWorkList from 'src/shared/hooks/useWorkList'

import tagStyled from 'styled-components'
import { StyledButton } from 'src/shared/styled'

import { type WorkListProps } from 'src/types/hooks.types'

const ButtonList = () => {
  const {
    countOfBtn,
    pushWorkReg,

    changeCountofBtn
  } = useWorkList() as WorkListProps

  const addButton = () => {
    pushWorkReg(`Button ${Number(countOfBtn) + 1} was added.`)
    changeCountofBtn()
  }

  const clickButton = (index: number) => {
    pushWorkReg(`Button ${Number(index) + 1} clicked.`)
  }

  return (
    <ButtonListMain>
      {[...Array(Number(countOfBtn))].map((item, index) => (
        <StyledButton key={index} onClick={() => { clickButton(index) }}>
          Button {index + 1}
        </StyledButton>
      ))}
      <StyledButton onClick={addButton}>Add Button {Number(countOfBtn) + 1}</StyledButton>
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
