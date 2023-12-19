import { Routes, Route } from 'react-router-dom'
import { Pokedex, Pokemon } from './pages'
import { Nav } from './components'
import './App.css'

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
