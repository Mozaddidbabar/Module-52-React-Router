import { useState } from 'react';
import './App.css'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h2>Clean</h2>
      {/* <Home></Home> */}
      </div>
    </>
  )
}

export default App
