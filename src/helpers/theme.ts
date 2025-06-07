import { createTheme } from '@mui/material';
import {
    BACKGROUND_COLOUR,
    COLOUR_PRIMARY_CONTRAST_TEXT,
    COLOUR_PRIMARY_DARK,
    COLOUR_PRIMARY_LIGHT,
    COLOUR_PRIMARY_MAIN, MUI_FILLED_INPUT_DARK_BG, MUI_FILLED_INPUT_LIGHT_BG, MUI_FILLED_INPUT_MEDIUM_BG,
    TEXT_COLOURS_DEFAULT,
    TEXT_COLOURS_EXTRA_LIGHT,
    TEXT_COLOURS_LIGHT
} from "./styleConstants.ts";

const theme = createTheme({
    palette: {
        primary: {
            main: COLOUR_PRIMARY_MAIN,
            light: COLOUR_PRIMARY_LIGHT,
            dark: COLOUR_PRIMARY_DARK,
            contrastText: COLOUR_PRIMARY_CONTRAST_TEXT,
        },
        text: {
            primary: TEXT_COLOURS_DEFAULT,
            secondary: TEXT_COLOURS_LIGHT,
            disabled: TEXT_COLOURS_EXTRA_LIGHT,
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: COLOUR_PRIMARY_CONTRAST_TEXT
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: MUI_FILLED_INPUT_LIGHT_BG,
                    '&.Mui-focused': {
                        backgroundColor: MUI_FILLED_INPUT_MEDIUM_BG,
                    },
                    '&:hover': {
                        backgroundColor: MUI_FILLED_INPUT_DARK_BG,
                    },
                    '&::before': {
                        borderBottom: `2px solid ${COLOUR_PRIMARY_MAIN}`
                    },
                    '&:hover:not(.Mui-disabled):before ': {
                        borderBottom: `2px solid ${COLOUR_PRIMARY_MAIN}`
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: BACKGROUND_COLOUR
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fill: COLOUR_PRIMARY_MAIN
                }
            }
        }
    }
});

export default theme;
