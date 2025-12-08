import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './Components/Buttons/Square_Buttons/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Square />

    </>
  )
}

export default App
