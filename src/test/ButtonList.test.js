import ButtonList from 'src/components/ContentBody/PageOne/ButtonList'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { darkMode } from 'src/utils/theme'

import '@testing-library/jest-dom/extend-expect'
import { ThemeModeProvider } from 'src/shared/hooks/useThemeMode'
import { WorkListProvider } from 'src/shared/hooks/useWorkList'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const testIds = {
  buttonListMain: 'button_list_main',
  addButton: 'add_button'
}

const renderApp = () => render(
  <QueryClientProvider client={queryClient}>
    <ThemeModeProvider>
        <WorkListProvider>
        <ThemeProvider
            theme={darkMode}
        >
            <CssBaseline/>
            <ButtonList />
        </ThemeProvider>
        </WorkListProvider>
    </ThemeModeProvider>
  </QueryClientProvider>
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

  const buttonListMain = getByTestId(testIds.buttonListMain)
  const addButton = getByTestId(testIds.addButton)
  // eslint-disable-next-line camelcase
  const old_count = buttonListMain.children.length

  fireEvent.click(addButton)
  // eslint-disable-next-line camelcase
  const new_count = buttonListMain.children.length

  // eslint-disable-next-line no-undef, camelcase
  expect(old_count).toBe(new_count - 1)
})
