import { createTheme } from '@mui/material/styles'
import { green, lightGreen } from '@mui/material/colors'

export const myTheme = createTheme({ 
    palette: { 
        primary:{
            main: lightGreen[700]
        },

        secondary:{
            main:green[900]
        }

    } 
})

export const primary= myTheme.palette.primary.main;
export const secondary= myTheme.palette.secondary.main;


export const Colors={
    dark_green: '#1f4120',
    light_green: '#32a436',
    green: '#68b56b',
    white: '#fff'
}

