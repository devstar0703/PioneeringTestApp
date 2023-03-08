import ThemeSelector from 'src/components/ContentBody/PageOne/ThemeSelector'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { darkMode } from 'src/utils/theme'

import '@testing-library/jest-dom/extend-expect'
import { ThemeModeProvider } from 'src/shared/hooks/useThemeMode'
import { WorkListProvider } from 'src/shared/hooks/useWorkList'

const testIds = {
  selectThemBtn: 'select_theme_btn'
}

const renderApp = () => render(
  <ThemeModeProvider>
    <WorkListProvider>
      <ThemeProvider
        theme={darkMode}
      >
        <CssBaseline/>
        <ThemeSelector />
    </ThemeProvider>
    </WorkListProvider>
  </ThemeModeProvider>
)

// eslint-disable-next-line no-undef
beforeEach(() => {
})

// eslint-disable-next-line no-undef
afterEach(() => {
  cleanup()
})

// eslint-disable-next-line no-undef
test('Test without enable/disable effect of sent button', () => {
  const { getByTestId } = renderApp()

  const selectThemBtn = getByTestId(testIds.selectThemBtn)
  const text = selectThemBtn.innerHTML.slice(0, 14)

  fireEvent.click(selectThemBtn)

  if (text.search('Dark') >= 0) {
    // eslint-disable-next-line camelcase
    const new_text = selectThemBtn.innerHTML.slice(0, 15)
    // eslint-disable-next-line no-undef
    expect(new_text).toBe('Set Light Theme')
  }
})
