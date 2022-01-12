import './App.css'
import { Routes, Route } from 'react-router-dom'
import Buy from './Screens/Buy/Buy'
import Home from './Screens/Home/Home'
import RoadMap from './Screens/RoadMap/RoadMap'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='buy' element={<Buy />} />
        <Route path='map' element={<RoadMap />} />
      </Routes>
    </div>
  )
}

export default App
