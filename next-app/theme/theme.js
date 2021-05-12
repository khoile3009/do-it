import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00C77B',
        },
        secondary: {
            main: '#47e686',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fafafa',
        },
        foreground: {
            default: '#000'
        },
        google: {
            main: '#4285F4',
            sub: '#6ea1f5'
        },
        apple: {
            main: '#000',
            sub: '#222'
        },
        linkedin: {
            main: '#0e76a8',
            sub: '#3486ad'
        }
    },
});

export default theme;