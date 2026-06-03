/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui";
import { mainTheme } from "./themes/mainTheme";
import { BrowserRouter } from 'react-router-dom'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeTransitionProvider } from './context/ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ThemeTransitionProvider>
        <ThemeUIProvider theme={mainTheme}>
          <App />
        </ThemeUIProvider>
      </ThemeTransitionProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
