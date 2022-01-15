import './App.css'
import { Routes, Route } from 'react-router-dom'
import Buy from './Screens/Buy/Buy'
import Home from './Screens/Home/Home'
import Hierachy from './Screens/Hierachy/Hierachy'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='buy' element={<Buy />} />
        <Route path='hierachy' element={<Hierachy />} />
      </Routes>
    </div>
  )
}

export default App
