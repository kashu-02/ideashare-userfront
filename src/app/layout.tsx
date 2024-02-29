'use client';
import {CssBaseline} from "@mui/material";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles'
import {Inter} from 'next/font/google'
import './globals.css'

import BottomNavigationMenu from './_components/bottomNavigationMenu'
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({subsets: ['latin']})

export const runtime = process.env.RUNTIME;
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    let theme = createTheme({
        palette: {
            primary: {
                main: "#FF905D",
                contrastText: "#FFFFFF"
            },
            secondary: {
                main: "#00BCD7",
                contrastText: "#FFFFFF"
            },
            yellow: {
                main: "#FADF0A",
                contrastText: "#707070"
            },
            text: {
                primary: '#707070'
            }
        },
        shape: {
            borderRadius: 1
        },
        typography: {
            fontFamily: [
                '"Hiragino Sans"',
                '"Hiragino Kaku Gothic ProN"',
                'Meiryo',
                '"Helvetica Neue"',
                "Arial",
                'sans-serif',
            ].join(','),
            body1: {
                fontWeight: 600,
            },
            subtitle1: {
                fontWeight: 600,
            },
            h4: {
                fontWeight: 700,
            },
            h5: {
                fontWeight: 600,
            },
            h6: {
                fontWeight: 700,
            }
        },
    })
    theme = responsiveFontSizes(theme)

    return (
        <html lang="ja">
        <head>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/icon.png"></link>
            <meta name="theme-color" content="#FADF0A"/>
            <title>IdeaShare</title>
        </head>
        <UserProvider>
        <body className={inter.className}>
        <AppRouterCacheProvider options={{enableCssLayer: true}}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
                <BottomNavigationMenu/>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </UserProvider>
        </html>
    )
}
