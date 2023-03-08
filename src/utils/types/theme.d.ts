// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { type Theme, type ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface CustomeTheme extends Theme {
    custom: any
  }
  // allow configuration using `createTheme`
  interface CustomeThemeOptions extends ThemeOptions {
    custom: any
  }
  export function createTheme (options?: CustomeThemeOptions): CustomeTheme
}
