import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import './index.css'
import App from './App.tsx'
import mermaid from "mermaid";
import { ThemeProvider } from '@mui/material';
import theme from "./helpers/theme.ts";

mermaid.initialize({ startOnLoad: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </StrictMode>,
)
