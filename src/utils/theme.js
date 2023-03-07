import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import * as locale from '@mui/material/locale';

const darkTheme = createTheme({
    layout: {
        header : 70,
        left : 240,
    },
    palette: {
        primary: { main : '#2f4f4f', top: '#2f4f4f', left: '#696969', content: 'white'},
        button: { bg : '#f0f8ff', text: '#800080'},
        tonalOffset: 0.2,
        background: {
            top: '#c0c0c0',
            left: '#white',
            content: '#008080'
        }
    }
}, locale['enUS']);

const lightTheme = createTheme({
    layout: {
        header : 70,
        left : 240
    },
    palette: {
        primary: { main : '#ff0', top: '#ff0', left: '#2f4f4f', content: '#000000'},
        button: { bg : '#cc0000', text: 'white'},
        tonalOffset: 0.2,
        background: {
            top: '#808080',
            left: '#cecece',
            content: 'white'
        }
    }
}, locale['enUS']);

export const darkMode = responsiveFontSizes(darkTheme);
export const lightMode = responsiveFontSizes(lightTheme);