import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
    theme={{
      algorithm: undefined, // ← This disables dark theme (light is default)
    }}
  >
    <App />
  </ConfigProvider>
  </StrictMode>,
)
