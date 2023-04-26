import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './component/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cards />
      </div>
    </>
  )
}

export default App
