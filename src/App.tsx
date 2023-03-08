import Main from './pages/Main'

import { ThemeModeProvider } from './shared/hooks/useThemeMode'
import { WorkListProvider } from './shared/hooks/useWorkList'

const App = () => {
  return (
    <ThemeModeProvider>
      <WorkListProvider>
        <Main />
      </WorkListProvider>
    </ThemeModeProvider>
  )
}

export default App
