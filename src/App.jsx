import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShopProduct from './component/ShopProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ShopProduct/>
    </>
  )
}

export default App
