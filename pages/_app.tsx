import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider, CssBaseline } from '@mui/material';
import Cookies from 'js-cookie';

import { darkTheme, lightTheme, customTheme } from '../themes';

// interface Props extends AppProps {
//   theme: string;
// }

function MyApp({ Component, pageProps }: AppProps) {

  const [currentTheme, setCurrentTheme] = useState(darkTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get("theme") || "dark";
  
    const selectedTheme = 
      cookieTheme === "light" 
      ? lightTheme
      : (cookieTheme === "dark")
        ? darkTheme
        : customTheme; 
        setCurrentTheme(selectedTheme)
  }, [])
  
  return (
  <ThemeProvider theme={currentTheme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' } 
// 	const validThemes = ['light', 'dark', 'custom'];
//   return { theme: validThemes.includes(theme) ? theme : 'dark' }
// }

export default MyApp;