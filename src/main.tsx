import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { MenuProvider } from './context/MenuContext'; // Импортируем MenuProvider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MenuProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MenuProvider>
)


