import { responsiveFontSizes, createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  custom: {
    layout: {
      header: 70,
      left: 240
    },
    palette: {
      primary: { main: '#2f4f4f', top: '#2f4f4f', left: '#696969', content: 'white' },
      button: { bg: '#f0f8ff', text: '#800080' },
      background: {
        top: '#c0c0c0',
        left: '#white',
        content: '#008080'
      }
    }
  }
})

const lightTheme = createTheme(
  {
    custom: {
      layout: {
        header: 70,
        left: 240
      },
      palette: {
        primary: { main: '#ff0', top: '#ff0', left: '#2f4f4f', content: '#000000' },
        button: { bg: '#cc0000', text: 'white' },
        background: {
          top: '#808080',
          left: '#cecece',
          content: 'white'
        }
      }
    }
  }
)

export const darkMode = responsiveFontSizes(darkTheme)
export const lightMode = responsiveFontSizes(lightTheme)
