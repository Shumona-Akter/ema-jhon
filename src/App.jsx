import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Products from './Component/Products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Products></Products>
    </div>
  )
}

export default App
