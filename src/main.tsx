import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConfigProvider, type ThemeConfig } from "antd";
import ruRu from 'antd/locale/ru_RU';

const themeConfig: ThemeConfig = {
    components: {
        Form: {
            itemMarginBottom: 0,
            verticalLabelPadding: 0,
        },
        Button: {
            fontWeight: 600,
        }
    }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ConfigProvider locale={ruRu} theme={themeConfig}>
        <App />
      </ConfigProvider>
  </StrictMode>,
)
