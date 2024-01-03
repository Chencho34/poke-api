import { Routes, Route } from 'react-router-dom'
import { Pokedex, Pokemon } from './pages'
import './App.css'
import { Nav } from './components'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/pokemon' index element={<Pokedex />} />
        <Route path=':id' element={<Pokemon />} />
      </Routes>
    </>
  )
}
