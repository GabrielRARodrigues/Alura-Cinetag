import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { BasePage } from 'pages/BasePage'
import { Home } from 'pages/Home'
import { Favoritos } from 'pages/Favoritos'
import { Player } from 'pages/Player'
import { NotFound } from 'pages/NotFound'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
