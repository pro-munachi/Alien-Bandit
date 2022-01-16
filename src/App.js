import './App.css'
import { Routes, Route } from 'react-router-dom'
import Buy from './Screens/Buy/Buy'
import Home from './Screens/Home/Home'
import Hierachy from './Screens/Hierachy/Hierachy'
import About from './Screens/About/About'
import ScrollToTop from './components/scrolltotop/ScrollToTop.jsx'

function App() {
  return (
    <div className='App'>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='buy' element={<Buy />} />
          <Route path='hierachy' element={<Hierachy />} />
        </Routes>
      </ScrollToTop>
    </div>
  )
}

export default App
