import * as React from 'react'

import { useLocalStorage } from 'react-use'

import { darkMode, lightMode } from 'src/utils/theme'

const ThemeModeContext = React.createContext({})

interface ThemeModeProviderProps {
  children: React.ReactElement
}

export const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const [themeMode, setSelectThemeMode] = React.useState(lightMode)
  const [themeTemp, setThemeTemp] = useLocalStorage('theme_mode', 'light')
  const [barMode, setBarMode] = useLocalStorage('bar_mode', 'expanded')

  const provider = {
    themeMode,
    themeTemp,
    barMode,

    onChangeThemeMode: (themeMode: string) => {
      if (themeMode === 'light') {
        setSelectThemeMode(lightMode)
        setThemeTemp('light')
      }
      if (themeMode === 'dark') {
        setSelectThemeMode(darkMode)
        setThemeTemp('dark')
      }
    },

    onChangeBarMode: (barMode: string) => {
      setBarMode(barMode)
    }
  }

  React.useEffect(() => {
    if (themeTemp === 'light') {
      setSelectThemeMode(lightMode)
      setThemeTemp('light')
    }
    if (themeTemp === 'dark') {
      setSelectThemeMode(darkMode)
      setThemeTemp('dark')
    }
  }, [themeTemp])

  return <ThemeModeContext.Provider value={provider}>{children}</ThemeModeContext.Provider>
}

const useThemeMode = () => React.useContext(ThemeModeContext)

export default useThemeMode
