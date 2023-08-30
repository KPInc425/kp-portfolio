import type { Theme } from 'theme-ui'

export const mainTheme: Theme = {
    fonts: {
        body: 'Trebuchet MS, sans-serif',
        heading: 'Trebuchet MS, sans-serif',
        monospace: 'Courier New, monospace',
        logoHeading: 'Times New Roman, serif',
    },
    colors: {
        text: '#fff',
        background: 'rgba(0,0,0,0.8)',
        primary: '#33e',
        surface: 'rgba(0,0,0,0.65)',
    },
    fontSizes: [
        8, 12, 14, 16, 20, 24, 32, 48, 64
    ],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700,
        semiBold: 300,
        thin: 100,
    },
    breakpoints: [40, 52, 125].map((n) => n + 'em'),
    links: {
        nav: {
            fontFamily: 'link',
            color: 'text',
            fontWeight: '300',
            textDecoration: 'none',
            ':hover': {
                color: 'primary',
            },
        },
    },
    buttons: {
        primary: {
            color: 'text',
            bg: 'primary',
        }, 
        icon: {
            color: 'text',
            bg: 'transparent',
            ':hover': {
                color: 'primary',
            },
            height: "fit-content",
            width: "fit-content",
            transform: "scale(1.25)",
            cursor: "pointer",
        },
    },
    text: {
        default: {
            color: 'text',
            fontSize: 3,
        },
        heading: {
            fontSize: 5,
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        },
        logoHeading: {
            fontSize: [2, 4, 6, 7],
            fontFamily: 'logoHeading',
            fontWeight: 'heading',
            lineHeight: 'heading',
            WebkitTextStroke: '0.35px black',
            display: 'block',
        },
        footer: {
            fontSize: 1,
            fontFamily: 'body',
            fontWeight: 'thin',
            lineHeight: 'body',
        },
    },
    images: {
        logoHeader: {
            height: 'auto',
            width: '100%',
            maxWidth: ['50px','70px','120px', '150px'],
            maxHeight: ['50px','70px','120px', ['150px']],
            paddingTop: [0, 2, 3]
        },
        logoLarge: {
            height: 'auto',
            width: '100%',
            maxWidth: '300px',
            maxHeight: '300px',
        },
        logoSmall: {
            height: 'auto',
            width: '100%',
            maxWidth: '30px',
            maxHeight: '30px',
        },
        icon: {
            height: 'auto',
            width: '100%',
            maxWidth: '100px',
            maxHeight: '100px',
        },
    },
}