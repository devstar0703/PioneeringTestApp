import Main from './pages/Main'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ThemeModeProvider } from './shared/hooks/useThemeMode'
import { WorkListProvider } from './shared/hooks/useWorkList'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeModeProvider>
        <WorkListProvider>
          <Main />
        </WorkListProvider>
      </ThemeModeProvider>
    </QueryClientProvider>
  )
}

export default App
