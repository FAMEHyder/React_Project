import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/Cart.jsx'

createRoot(document.getElementById('root')).render(
    <CartProvider>
      <App />
    </CartProvider>

)