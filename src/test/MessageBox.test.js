import MessageBox from 'src/components/ContentBody/PageOne/MessageBox'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { darkMode } from 'src/utils/theme'

import '@testing-library/jest-dom/extend-expect'

const testIds = {
  textarea: 'textarea',
  sentbutton: 'sentbutton'
}

const renderApp = () => render(<ThemeProvider
  theme={darkMode}
>
  <CssBaseline/>
  <MessageBox />
</ThemeProvider>)

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

  const textarea = getByTestId(testIds.textarea)
  const sentbutton = getByTestId(testIds.sentbutton)

  fireEvent.change(textarea.children[0].children[0], { target: { value: 'aaaaa' } })
  // eslint-disable-next-line no-undef
  expect(sentbutton).toBeEnabled()

  fireEvent.change(textarea.children[0].children[0], { target: { value: '' } })
  // eslint-disable-next-line no-undef
  expect(sentbutton).toBeDisabled()
})
