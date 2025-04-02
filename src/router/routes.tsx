import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lobby from '../pages/Lobby'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<Lobby />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
