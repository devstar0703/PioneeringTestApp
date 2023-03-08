import useThemeMode from 'src/shared/hooks/useThemeMode'
import useWorkList from 'src/shared/hooks/useWorkList'

import tagStyled from 'styled-components'
import { StyledButton } from 'src/shared/styled'

import { type WorkListProps, type ThemeModeProps } from 'src/types/hooks.types'

const ThemeSelector = () => {
  const { themeTemp, onChangeThemeMode } = useThemeMode() as ThemeModeProps

  const { pushWorkReg } = useWorkList() as WorkListProps

  const handleChangeThemeMode = () => {
    onChangeThemeMode(themeTemp === 'light' ? 'dark' : 'light')
    pushWorkReg(`Theme was set to ${themeTemp === 'light' ? 'Dark' : 'Light'}`)
  }
  return (
    <ThemeSelectorMain>
      <StyledButton onClick={handleChangeThemeMode}
        data-testid='select_theme_btn'
      >{`Set ${
        themeTemp === 'light' ? 'Dark' : 'Light'
      } Theme`}</StyledButton>
    </ThemeSelectorMain>
  )
}

export default ThemeSelector

const ThemeSelectorMain = tagStyled.div`
    padding-bottom : 10px;
`
