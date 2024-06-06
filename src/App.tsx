import './App.css'
import { CartContextProvider } from './context/CarritoContext'
import { AppRoutes } from './routes/Routes'

function App() {
  return (
    <>
      <CartContextProvider>
        <AppRoutes/>
      </CartContextProvider>
    </>
  )
}

export default App
