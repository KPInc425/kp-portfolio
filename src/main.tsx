/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui";
import { mainTheme } from "./themes/mainTheme";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeUIProvider theme={mainTheme}>
      <App />
    </ThemeUIProvider>
  </React.StrictMode>,
)
