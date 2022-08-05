import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ConfigProvider } from 'antd';
import ru_RU from 'antd/es/locale/ru_RU';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={ru_RU}>
    <App />
  </ConfigProvider>
    </BrowserRouter>
    </React.StrictMode>
   
);
