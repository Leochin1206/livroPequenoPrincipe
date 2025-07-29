import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Header } from './components/header'
import App from './App'
import { Footer } from './components/footer'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-grow'>
          <App />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
)