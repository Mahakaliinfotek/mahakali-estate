import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import { HomePageLayout } from './layouts/HomePageLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
