import Head from 'next/head'
import {Provider} from 'react-redux'
import {useStore} from '../store/store'
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    font-family: var(--font-family, sans-serif);
    -webkit-text-size-adjust: 100%;
  }

  *,
  *::before,
  *::after {
      box-sizing: inherit;
  }
  
  body {
      margin: 0;
      min-width: 360px;
      min-height: 100%;
      font-weight: 300;
      font-size: 16px;
      color: var(--color-light-dark);
      overflow-anchor: none;
  }
  
  img {
      height: auto;
      max-width: 100%;
      object-fit: cover;
  }
  
  a {
      text-decoration: none;
  }
  
  .visually-hidden {
      position: absolute;
      overflow: hidden;
      margin: -1px;
      border: 0;
      padding: 0;
      width: 1px;
      height: 1px;
      clip: rect(0 0 0 0);
  }
  
  .container {
      margin: 0 auto;
      padding-left: var(--container-offset);
      padding-right: var(--container-offset);
      max-width: var(--container-width);
  }
  
  #__next {
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
  }
  
  .wrapper {
      padding: 40px;
      background-color: var(--color-white);
      height: 100%;
      
      @media (max-width: 768px) {
          padding: 35px 15px;
      }
  }
  
  ::selection {
      color: var(--color-white);
      background-color: var(--color-primary);
  }
`

const theme = {
  fontFamily: '"Fira sans", sans-serif',
  contentWidth: '1230px',
  containerOffset: '15px',
  containerWidth: 'calc(1230px + (15px * 2))',
  colors: {
    dark: '#141414',
    lightDark: '#1f1f1f',
    white: '#fff',
    red: '#f00',
    green: '#00a340',
    black: '#000',
    primary: '#005382',
    primaryDark: '#003F63'
  }
}

function MyApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Head>
        <title>Gamebox</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <ThemeProvider theme={theme}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
