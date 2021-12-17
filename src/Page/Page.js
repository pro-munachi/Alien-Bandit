import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Buy from '../Screens/Buy/Buy'
import Home from '../Screens/Home/Home'
import RoadMap from '../Screens/RoadMap/RoadMap'

const Page = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='buy' element={<Buy />} />
      <Route path='map' element={<RoadMap />} />
    </Routes>
  )
}

export default Page
