import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavbarProvider from './context/NavbarContext.jsx'
import ThemeProvider from './context/ThemeContext.jsx'


createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </ThemeProvider>

)
