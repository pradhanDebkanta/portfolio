import React, { useEffect } from 'react';
import '../assets/css/globals.css';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import TopNavbar from '../components/navbar';

const lightTheme = createTheme({
  type: 'light',
  theme: {

  }

});
const darkTheme = createTheme({
  type: 'dark',
  theme: {

  }
});

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // console.log = () => { };
      // console.warn = () => { };
    }

  }, [])
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <TopNavbar />
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
